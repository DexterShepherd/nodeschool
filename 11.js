var http = require('http');
var fs = require('fs');
var port = Number(process.argv[2]);
var file = process.argv[3];

var server = http.createServer(function(request, response){   
  var stream = fs.createReadStream(file);
  response.writeHead(200, { 'content-type': 'text/plain' });
  stream.pipe(response);
});

server.listen(port);
