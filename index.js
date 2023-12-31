var http = require('http');
var url = require('url');
var topic = require('./lib/topic');
var style = require('./lib/style');

var app = http.createServer((request, response)=>{
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if (pathname === '/') {
        if (queryData.id === undefined) {
            topic.home(request, response);
        } else {
            topic.page(request, response);
        }
    } else if (pathname === "/style.css"){
        style.css(request, response);
    } else if (pathname === "/create") {
        topic.create(request, response);
    } else if (pathname === '/create_process') {
        topic.create_process(request, response);
    } else if (pathname === '/update') {
        topic.update(request, response);
    } else if (pathname === '/update_process') {
        topic.update_process(request, response);
    } else if (pathname === '/delete_process') {
        topic.delete_process(request, response);
    } else {
        response.writeHead(404);
        response.end('NOT FOUND');
    }
});

app.listen(3000);