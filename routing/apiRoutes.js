// LOAD DATA
// We are linking our routes to a series of "data" sources.

var friendData = require('../data/friends.js');

module.exports = function(app){

//Creating our API in order to POST new frineds to the database
  app.post('/api/newFriend',function(req,res){
    
    //get the value of the user input
    var friendInput = req.body;
    var userResponseScore = friendData.totalValue;
    var matchName = '';
    var matchImage = '';


    console.log(friendInput);
    friendData.push(friendInput)

    //Loop through each object to find the minimum value in the arrays
    for (i=0; i < friendData.length; i++){
      //Take the totalValue that was just added and compare it to each object in the friendData array 
      //Create an object of each item in the data array including the difference as a key/value pair
        //Use math.abs to find the absolute value for this value
        //Use math.min to find the object that has the lowest value
        //Pass this value back to the ui

    }

    //Loop through each value in the array and find the value closest to the newFriend.totalValue
  });
// Creating our API in order to find the closest friend
  app.get('/api/newFriend', function(req, res){
    res.json(friendData);
  });
};

