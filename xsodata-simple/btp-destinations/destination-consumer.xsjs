import { response } from "sdk/http";

function printLineDelimiter() {
    response.println("--------------------------");
}

printLineDelimiter();
response.println("Getting destination...");

var destination = $.net.http.readDestination("not.used.at.all", "bigdatacloud");

response.println("Loaded destination:\n" + JSON.stringify(destination));
printLineDelimiter();
response.println("Sending request...");

var client = new $.net.http.Client();
var request = new $.web.WebRequest($.net.http.GET, "/data/client-ip");
request.accept = "application/json";

client.request(request, destination);
var apiResponse = client.getResponse();
response.println("Received response status code: " + apiResponse.status);
response.println("Received response body:\n" + apiResponse.body.asString());
response.println("Full response: \n" + JSON.stringify(apiResponse));

printLineDelimiter();
response.println("Done!");
printLineDelimiter();

response.flush();
response.close();
