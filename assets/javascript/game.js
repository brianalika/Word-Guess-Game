var randomWordArr = ["cow", "pig", "chicken", "duck", "horse"];
var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
console.log(randomWord);

var s;
var count = 0;
var answerArray = [];
var wins = 0; 
var losses = 0; 

function startUp() {
    for (var i = 0; i < randomWord.length; i++) {
        answerArray[i] = "_";
    }
    s = answerArray.join(" ");
    document.getElementById("answer").innerHTML = s;
}

function Letter() {
    var letter = document.getElementById("letter").value;
    letter = letter.toLowerCase(); 

    if (letter.length > 0) {
        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === letter) {
                answerArray[i] = letter;
            }
        }
        count++;
        document.getElementById("counter").innerHTML = "No of clicks: " + count;
        document.getElementById("answer").innerHTML = answerArray.join(" ");
        winCondition();
    }

    if (count > 3) {
        document.getElementById("stat").innerHTML = "Keep on trying!";
    }
    
   document.getElementById("letter").value = "";

}

function winCondition() {

    if (randomWord === answerArray.join('')) {
        alert('You Win!');
        wins++;
        document.getElementById("wins").innerHTML = "Wins: " + wins; 
        count = 0;
        answerArray = [];
        randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
        startUp()
    }
}

