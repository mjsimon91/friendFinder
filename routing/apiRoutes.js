// LOAD DATA
// We are linking our routes to a series of "data" sources.

var friendData = require('../data/friends.js');

module.exports = function(app){

//Creating our API in order to POST new frineds to the database
  app.post('/api/newFriend',function(req,res){
    
    //get the value of the user input
    var friendInput = req.body;
    
    //Create an object for the best friend and provide an arbitrary default value to compare against
    var bestFriend = {
      matchFirstName: '',
      matchLastName: '',
      matchImage: '',
      bestfriendDiff: 1000
    }
    
    //Creating an array to push all of the difference values
    scoreDifferential = [];
    


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
      scoreDifferential.push(questionOneDiff);
      scoreDifferential.push(questionTwoDiff);
      scoreDifferential.push(questionThreeDiff);
      scoreDifferential.push(questionThreeDiff);
      scoreDifferential.push(questionFourDiff);
      scoreDifferential.push(questionFiveDiff);
      scoreDifferential.push(questionSixDiff);
      scoreDifferential.push(questionSevenDiff);
      scoreDifferential.push(questionEightDiff);
      scoreDifferential.push(questionNineDiff);
      scoreDifferential.push(questionTenDiff);

      //add the different score to an array using reduce
      var totalScoreDiff = scoreDifferential.reduce(function(curVal,amount){
        return curVal + amount
      })

      console.log('totalScoreDiff ' + totalScoreDiff);

      //If the current score is less then the current match, then we have a new best friend!
      if (totalScoreDiff < bestFriend.bestfriendDiff){
        bestFriend.matchFirstName = friendData[i].firstName;
        bestFriend.matchLastName = friendData[i].lastName;
        bestFriend.matchImage = friendData[i].imageURL;
        bestFriend.bestfriendDiff = totalScoreDiff;
      }
    }

    console.log(bestFriend);
    

    //Return the best match
    res.json(bestFriend)

    //Push the new entry to the "database"
    friendData.push(friendInput);
  });

// Creating our API in order to find the closest friend
  app.get('/api/newFriend', function(req, res){
    res.json(friendData);
  });
}
