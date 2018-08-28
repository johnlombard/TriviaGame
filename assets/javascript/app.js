




// press start button
// game shows questions and timer starts questions
// when the answers are finished user presses submit
// display correct, incorrect, and unanswered questions
// if the user runs out of time automatically submit the answers
// display correct, incorrect, and unanswered questions
// have play again button which would restart the game
var gameStarted = false;
var time = 5;

if (gameStarted === false ) {
    
    // starts the game on the click
    $("#start").on("click", function() {
        startGame();
        
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

function timer() {
    time--;
    if(time > 0){
        setTimeout(timer, 1000);
    } else if (time === 0) {
        gameOver();

    }
    $("#time").html("<h3> Time Remaining: " + time + "</h3>");
}

function startGame() {
    gameStarted = true;
    showElements();
    setTimeout(timer, 1000);

}


function gameOver(){
    gameStarted = false;
    $(".question").hide();
    $(".submit").hide();
    
    $(".results").show();

}