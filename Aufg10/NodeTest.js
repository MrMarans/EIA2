/*
Aufgabe: 10
Name: Metzger, Ron
Matrikel: 254878
Datum: 25.06.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
Der Code wurde durch Unterst�tzung von Dominik Braun entwickelt
*/
"use strict";
console.log("Server starting");
var Http = require("http");
var Url = require("url");
var port = process.env.PORT;
if (port == undefined)
    port = 8100;
var server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);
function handleListen() {
    console.log("Listening on port: " + port);
}
function handleRequest(_request, _response) {
    console.log("Request received");
    console.log(_request.url);
    var query = Url.parse(_request.url, true).query;
    console.log(query);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    var key;
    for (key in query)
        _response.write(key + ":" + query[key]);
    _response.end();
}
//# sourceMappingURL=NodeTest.js.map