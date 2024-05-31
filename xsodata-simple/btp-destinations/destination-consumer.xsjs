import { response } from "sdk/http";

response.println("-------------------------!");
response.println("Getting destination...");
var destination = $.net.http.readDestination("not.used.at.all", "bigdatacloud");
response.flush();
response.println("-------------------------!");

response.println("Loaded destination: " + JSON.stringify(destination));
response.println("-------------------------!");
response.println("Sending request...");

var client = new $.net.http.Client();
var request = new $.web.WebRequest($.net.http.GET, "/data/client-ip");
request.accept = "application/json";

client.request(request, destination);
var apiResponse = client.getResponse();
response.println("Received response status code: " + apiResponse.status);
response.println("Received response body:\n" + apiResponse.body.asString());
response.println("Full response: \n" + JSON.stringify(apiResponse));

response.println("-------------------------!");
response.println("Done!");


response.flush();
response.close();
