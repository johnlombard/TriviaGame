




// press start button
// game shows questions and timer starts questions
// when the answers are finished user presses submit
// display correct, incorrect, and unanswered questions
// if the user runs out of time automatically submit the answers
// display correct, incorrect, and unanswered questions
// have play again button which would restart the game
var gameStarted = false;
var time = 31;
var correct = 0;
var incorrect = 0;
var unanswered;

if (gameStarted === false) {

    // starts the game on the click
    $("#start").on("click", function () {
        startGame();
        submitAnswers();

    })

    // hides questions and submit button before start
    $(".question").hide();
    $(".submit").hide();
    $(".results").hide();



}


// displays questions and time
function showElements() {
    $(".question").show();
    $("#start").hide();

    $(".submit").show();

}


// determines the remaining time
function timer() {
    time--;
    if (time > 0) {
        setTimeout(timer, 1000);
    } else if (time === 0) {
        gameOver();
    }

    // } else if (submitAnswers()) {
    //     console.log("hello")
    // }

    $("#time").html("<h3> Time Remaining: " + time + "</h3>");
}


// starts the game
function startGame() {
    gameStarted = true;
    showElements();
    setTimeout(timer, 10);



}




function gameOver() {
    gameStarted = false;
    $(".question").hide();
    $(".submit").hide();
    $(".results").show();
    $("#time").hide();
    $("#over").html("<h2> And in the end...</h2>");
    $(".results").html("<h3> Correct: " + correct + "</h3>" + "<br>"+ "<h3> Incorrect: " + incorrect + "</h3>");
    


}

// submits the answers and ends the game. Changes time to end text
function submitAnswers() {
    $(".submit").on("click", function () {
        gameOver();

        var test = $("#testing").val();
        
    if (test == "Correct"){
        console.log("works")
        correct++;
    }
    console.log(correct);


    });

}


