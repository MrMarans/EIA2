    /*
Aufgabe: 10
Name: Metzger, Ron
Matrikel: 254878
Datum: 25.06.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
Der Code wurde durch Unterstützung von Dominik Braun entwickelt
*/


console.log("Server starting");

import Http = require("http");
import Url = require("url");

interface AssocStringString {
    [key: string]: string;
}

let port: number = process.env.PORT;
if (port == undefined)
    port = 8100;

let server: Http.Server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);

function handleListen(): void {
    console.log("Listening on port: " + port);
}

function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("Request received");

    console.log(_request.url);
    let query: AssocStringString = Url.parse(_request.url, true).query;
    console.log(query);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    let key: string;
    for (key in query)
        _response.write(key + ":" + query[key]);
    _response.end();
}