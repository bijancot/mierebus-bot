var request = require("request")

var url = "https://bgskr-project.my.id/dummy-api/kunjungan-poli.php";

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body.response.data) // Print the json response
    }
})
