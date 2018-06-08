var randomWordArr = ["cow", "pig", "chicken", "duck", "horse"];
var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
console.log(randomWord);

var s;
var count = 0;
var answerArray = [];

function startUp() {
    for (var i = 0; i < randomWord.length; i++) {
        answerArray[i] = "_";
    }
    s = answerArray.join(" ");
    document.getElementById("answer").innerHTML = s;
}

function Letter() {
    var letter = document.getElementById("letter").value;

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

}

function winCondition() {

    if (randomWord === answerArray.join('')) {
        alert('You Win!');
        document.location.reload(); 
    }
}
