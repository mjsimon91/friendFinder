// LOAD DATA
// We are linking our routes to a series of "data" sources.

var friendData = require('../data/friends.js');

module.exports = function(app){

//Creating our API in order to POST new frineds to the database
  app.post('/api/newFriend',function(req,res){
    //post the value to the db
  });
// Creating our API in order to find the closest friend
  app.get('/api/newFriend', function(req, res){
    //Loop through each value in the array and find the value closest to the newFriend.totalValue
  });
};
