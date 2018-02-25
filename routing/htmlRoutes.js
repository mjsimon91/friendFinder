//Adding the npm for finding the right path
var path = require('path');

//Export the following so that the html can be used
module.exports = function(app){

  //This will allow the following url directory paths to be used
  //A GET Route to `/survey` which should display the survey page.
  app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // A default, catch-all route that leads to `home.html` which displays the home page.
  app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });


};
