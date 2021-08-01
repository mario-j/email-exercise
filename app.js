const express = require("express")
var app = express();
var server = app.listen(3000);
var io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection', (socket) => {

    socket.on('load-emails', (username, password, port, server, selectedServerType) => {
        if (selectedServerType.toLowerCase() == "imap") {
            loadEmailsImap(username, password, port, server);
        } else if (selectedServerType.toLowerCase() == "pop3") {
            loadEmailsPop3(username, password, port, server);
        }
    })

    console.log('user connected');
    socket.on('start', () => {
        console.log("started");


    })
});

function loadEmailsPop3(username, password, port, server) {
    var Client = require('node-poplib-gowhich').Client;
    var client = new Client({
        hostname: server,
        port: port,
        tls: true,
        mailparser: true,
        username: username,
        password: password
    });
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

function loadEmailsImap(username, password, port, server) {
    var Imap = require('imap'),
        inspect = require('util').inspect;
    const simpleParser = require('mailparser').simpleParser;

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
            // this will occurs when any error occurs while fetching emails
            f.on('error', function (err) {
                console.log(err)
            })

            f.on('end', function () {

            })
        })
    })

    imap.once('error', function (err) {
        console.log(err);
    });

    imap.once('end', function () {
        console.log('Connection ended');
    });

    imap.connect()

    function openInbox(cb) {
        imap.openBox('INBOX', true, cb);
    }
}