var http = require ('http');
var fs = require('fs');


process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
   var input = process.stdin.read();

   if (input !== null) {
       // echo the text
       process.stdout.write(input);

       var command = input.trim();
       if (command == 'exit') {
           process.exit(0);
       }
   }
});

http.createServer(function(req, res) {
    var name = require('url').parse(req.url, true).query.name;

    if (name === undefined) name = 'world';

    if (name === 'burningbird') {
        var file = 'phoenix5a.png';
        fs.stat(file, function(err, stat){
            if(err) {
                console.error(err);
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end("Sorry, Burningbird isn't around right now \n");
            } else {
                var img = fs.readFileSync(file);
                res.contentType = 'image/png';
                res.contentLength = stat.size;
                res.end(img, 'binary');
            }
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello ' + name + ' \n');
    }
}).listen(8124)

console.log('Server is running at http://127.0.0.1:8124/');
