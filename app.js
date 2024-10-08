const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
// for css
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.static(__dirname));

// for html
app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  // Mailchimp API request
  const url = "https://us8.api.mailchimp.com/3.0/lists/3a6e87835e";
  const options = {
    method: "POST",
    auth: "your API goes here"
  }
  const request = https.request(url, options, function(response){

    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    }else {
      res.sendFile(__dirname + "/failure.html");
    }
    response.on("data", function(data){
      console.log(JSON.parse(data));
    });
  });
  request.write(jsonData);
  request.end();
});

//  Redirect on failure
app.post("/failure", function(req, res){
  res.redirect("/");
});

//  Start the server
app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000");
});

// Kamil Ginyatov
