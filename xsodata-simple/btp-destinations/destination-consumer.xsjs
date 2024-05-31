import { response } from "sdk/http";

response.println("Getting destination...");

var destination = $.net.http.readDestination("not.used.at.all", "bigdatacloud");

response.println("Done!");
response.println("Destination: " + destination);

response.flush();
response.close();
