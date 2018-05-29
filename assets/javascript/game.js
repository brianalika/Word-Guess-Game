var randomWordArr = ["rupaul", "rainbow", "stonewall", "marsha", "equality"];
var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];

var s;
var count = 0;
var answerArray = [];

function startUp()
{
    for (var i = 0; i < randomWord.length; i++) 
    {
        answerArray[i] = "_";
    }
    s = answerArray.join(" ");
    document.getElementById("answer").innerHTML = s; 
}

// function wincondition {
    // Take existing answer array, loop through it, and check it for underscores. If no underscores, then you've won.
    // Image pop-up. Congrats! (Pop-up or alert)
    // Dismiss pop-up.
    // Move on to next word.
    // NOTE: I'll need a "for loop" that checks for every answer in the array.
    // NOTE: Or, you could also use a string method. Index of method: https://www.w3schools.com/jsref/jsref_indexof.asp
    // Better explanation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
// }

function Letter()
{
    var letter = document.getElementById("letter").value;

    if (letter.length > 0)

        for (var i = 0; i < randomWord.length; i++)
            {
                if (randomWord[i] === letter)
                {
                    answerArray[i] = letter;
                }
            }
            count++;
            document.getElementById("counter").innerHTML = "No of clicks: " + count;
            document.getElementById("answer").innerHTML = answerArray.join(" ");
        
        if(count>10)
        {
            document.getElementById("stat").innerHTML = "Come on -- you should have guessed by now";
        }
}

// var randArr = randWord.split('');
// alert(randArr);

