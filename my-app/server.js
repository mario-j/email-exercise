// Angular server

const expressAngular = require('express');
const http = require('http');
const path = require('path');
const simpleParser = require('mailparser').simpleParser;
var Client = require('node-poplib-gowhich').Client;

const appAngular = expressAngular();
const port = 4200;
appAngular.use(expressAngular.static(__dirname + '/dist/my-app'));
appAngular.get('/*', (req, res) => res.sendFile(path.join(__dirname)));
const serverAngular = http.createServer(appAngular);
serverAngular.listen(port, () => console.log(`App running on: http://localhost:${port}`));


//Socket IO server 
const express = require("express")
var app = express();
var server = app.listen(3000);
var io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection', (socket) => {
    console.log('connected');
    socket.on('load-emails', (username, password, port, server, selectedServerType, selectedEncryption) => {
        if (selectedServerType.toLowerCase() == "imap") {
            loadEmailsImap(username, password, port, server, selectedEncryption);
        } else if (selectedServerType.toLowerCase() == "pop3") {
            loadEmailsPop3(username, password, port, server, selectedEncryption);
        }
    })
});

function loadEmailsPop3(username, password, port, server) {
    if (selectedEncryption == "ssltls") {
        var client = new Client({
            hostname: server,
            port: port,
            tls: true,
            mailparser: true,
            username: username,
            password: password
        });
    } else if (selectedEncryption == "unencrypted") {
        var client = new Client({
            hostname: server,
            port: port,
            tls: false,
            mailparser: true,
            username: username,
            password: password
        });
    } else if (selectedEncryption == "starttls") {
        var client = new Client({
            hostname: server,
            port: port,
            tls: true,
            mailparser: true,
            username: username,
            password: password
        });
    }
    client.connect(function () {
        client.retrieveAll(function (err, messages) {
            messages.forEach(function (message) {
                var from = message.from[0].name.toString();
                var subject = message.subject.toString();
                var date = new Date(message.headers.date)
                var dateString = date.toDateString() + " " + date.toLocaleTimeString();
                var body = message.html;
                io.emit('loaded-emails', { from: from, subject: subject, date: dateString, body: body });
            });
            client.quit();
        })
    })
}

function loadEmailsImap(username, password, port, server, selectedEncryption) {
    var Imap = require('imap'),
        inspect = require('util').inspect;

    if (selectedEncryption == "ssltls") {
        var imap = new Imap({
            user: username,
            password: password,
            host: server,
            port: port,
            tls: true,
            tlsOptions: {
                servername: server,
            }
        })
    } else if (selectedEncryption == "unencrypted") {
        var imap = new Imap({
            user: username,
            password: password,
            host: server,
            port: port,
            tls: false
        })

    } else if (selectedEncryption == "starttls") {
        var imap = new Imap({
            user: username,
            password: password,
            host: server,
            port: port,
            tls: true,
            autotls: "always",
            tlsOptions: {
                servername: server,
            }
        })
    }

    imap.once('ready', function () {
        console.log("ready");
        openInbox(function (err, box) {
            var f = imap.seq.fetch('1:' + box.messages.total, {
                bodies: '',
                struct: true
            });

            f.on('message', function (msg, seqno) {
                msg.on('body', async function (stream, info) {
                    var parsed = await simpleParser(stream)
                    var from = parsed.from.value[0].name.toString();
                    var subject = parsed.subject.toString();
                    var date = parsed.date.toDateString() + " " + parsed.date.toLocaleTimeString();
                    var body = parsed.html;
                    io.emit('loaded-emails', { from: from, subject: subject, date: date, body: body });
                });
            })

            f.on('error', function (err) {
                console.log(err.textCode);
                io.emit('err', err.textCode);
            })
        })
    })

    imap.once('error', function (err) {
        console.log(err.textCode);
        io.emit('err', err.textCode);
    });

    imap.connect()

    function openInbox(cb) {
        imap.openBox('INBOX', true, cb);
    }
}