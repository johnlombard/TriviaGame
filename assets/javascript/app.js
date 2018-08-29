
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
var radios;


if (gameStarted === false) {

    // starts the game on the click
    // $("#start").on("click", function () {
    //     startGame();
    // });

    // hides questions and submit button before start
    $(".question").hide();
    $(".submit").hide();
    $(".results").hide();



};


// displays questions and time
function showElements() {
    $(".question").show();
    $("#start").hide();

    $(".submit").show();

};


// determines the remaining time
function timer() {
    time--;
    if (time > 0) {
        setTimeout(timer, 1000);
    } else if (time === 0) {

        submitAnswers();

    }

    // } else if (submitAnswers()) {
    //     console.log("hello")
    // }

    $("#time").html("<h3> Time Remaining: " + time + "</h3>");
};


// starts the game
function startGame() {
    gameStarted = true;
    showElements();
    setTimeout(timer, 10);



};




function gameOver() {
    gameStarted = false;
    $(".question").hide();
    $(".submit").hide();
    $(".results").show();
    $("#time").hide();
    $("#over").html("<h2> And in the end...</h2>");

     $("#over").show();





};

// submits the answers and ends the game. Changes time to end text
function submitAnswers() {

    gameOver();




    for (i = 0; i <= 40; i++) {
        var radios = document.getElementsByName("question" + i);
        for (var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            if (radio.value == 'Correct' && radio.checked) {
                correct++;
            } else if (radio.value == 'Incorrect' && radio.checked) {
           incorrect++; };

            console.log(correct);
            console.log(time);
        }
    };


    $(".results").html("<h3> Correct: " + correct + "</h3>" + "<br>" + "<h3> Incorrect: " + incorrect + "</h3>");
    $(".results").append("<button class = 'encore' onclick = 'return resetGame();'>Encore</button>")
};

function resetGame() {
    gameStarted = true;
    correct = 0;
    incorrect = 0;
    time = 31;
    $("#time").show();
    $("#over").hide();
    
    $(".results").hide();

    startGame();
    clearButton();

};

function clearButton() {
    location.reload();
   

    };