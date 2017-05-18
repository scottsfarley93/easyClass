var frisby = require("frisby");
var conf = require("./../../config/conf.js")

URI = "http://" + conf.host + ":" + conf.port + "/" + conf.apiDomain + "/artifacts";

frisby.create("Artifact GET Endpoint")
    .get(URI)
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSONTypes({
        error: Boolean,
        data: Array
    })
    .toss()

frisby.create("Artifact POST Endpoint")
    .post(URI, {
        ProjectID: ""
    })
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSONTypes({
        error: Boolean,
        data: Object
    })
    .toss()



var singleUserURI = URI + "/1"

frisby.create("Single User GET Endpoint")
    .get(singleUserURI)
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSONTypes({
        error: Boolean,
        data: Object
    })
    .expectJSONTypes('data', {
        id: Number,
        FirstName: String,
        LastName: String,
        Eamil: String,
        password: String,
        created_at: Date,
        updated_at: Date
    })
    .toss()

frisby.create("Single User PUT Endpoint")
    .put(singleUserURI, {
        password: "sdhshdshdhs"
    })
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSONTypes({
        error: Boolean,
        data: Object
    })
    .toss()