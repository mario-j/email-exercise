let http = require('http');
let fs = require('fs');

let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
};

http.createServer(handleRequest).listen(8000)

//#######################################################

var Imap = require('imap'),
    inspect = require('util').inspect;

const simpleParser = require('mailparser').simpleParser;

console.log("parse", simpleParser);

var imap = new Imap({
    user: 'donaldmcgriddle@gmail.com',
    password: 'F00tball4!',
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
    tlsOptions: {
        servername: 'imap.gmail.com',
    }
})

imap.once('ready', function () { 
    console.log("ready");
    openInbox(function (err, box) { 
        var f = imap.seq.fetch('1:3', {
            bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
            struct: true
        });

        f.on('message', function (msg, seqno) {
            console.log('Message #%d', seqno);
            msg.on('body', async function (stream, info) {
                var parsed = await simpleParser(stream)
                console.log("parsed", parsed);
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