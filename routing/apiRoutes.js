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


    function potentialFriend (firstName, lastName, profileImage){
      this.firstName = firstName;
      this.lastName = lastName;
      this.profileImage = profileImage;
      scoreDiff = [];
      totalScoreDiff = 0;
    }

    potentialFriend.prototype.diffArray = function(){
      //Loop through each friend to find the different scores for each response
      for (let i = 0; i < friendData.length; i++) {
        //go through each question and get the score difference
        var questionOneDiff = parseInt(Math.abs(req.body.questionOne - friendData[i].questionOne));
        var questionTwoDiff = parseInt(Math.abs(req.body.questionTwo - friendData[i].questionTwo));
        var questionThreeDiff = parseInt(Math.abs(req.body.questionThree - friendData[i].questionThree));
        var questionFourDiff = parseInt(Math.abs(req.body.questionFour - friendData[i].questionFour));
        var questionFiveDiff = parseInt(Math.abs(req.body.questionFive - friendData[i].questionFive));
        var questionSixDiff = parseInt(Math.abs(req.body.questionSix - friendData[i].questionSix));
        var questionSevenDiff = parseInt(Math.abs(req.body.questionSeven - friendData[i].questionSeven));
        var questionEightDiff = parseInt(Math.abs(req.body.questionEight - friendData[i].questionEight));
        var questionNineDiff = parseInt(Math.abs(req.body.questionNine - friendData[i].questionNine));
        var questionTenDiff = parseInt(Math.abs(req.body.questionTen - friendData[i].questionTen));
        
        //Push all the differential values to the scoreDiff array
        scoreDiff.push(questionOneDiff);
        scoreDiff.push(questionTwoDiff);
        scoreDiff.push(questionThreeDiff);
        scoreDiff.push(questionThreeDiff);
        scoreDiff.push(questionFourDiff);
        scoreDiff.push(questionFiveDiff);
        scoreDiff.push(questionSixDiff);
        scoreDiff.push(questionSevenDiff);
        scoreDiff.push(questionEightDiff);
        scoreDiff.push(questionNineDiff);
        scoreDiff.push(questionTenDiff);

        //add the different score to an array using reduce
        totalScoreDiff = scoreDiff.reduce(function(curVal,amount){
          return curVal + amount
        })
        //find the person with the lowest differential value
      }
    }
    
    for (let j = 0; j < friendData.length; j++) {
      var friends = new potentialFriend(friendData[j].firstName, friendData[j].lastName, friendData[j].imageURL)
      friends.diffArray(); 
      console.log('Score Array ' +scoreDiff);
      console.log('Total Score ' + totalScoreDiff);
      
    }

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

