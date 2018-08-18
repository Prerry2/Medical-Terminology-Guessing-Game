// Dictionary for the hangman word choice
var wordDictionary = ["abdominoplasty", "abdominal aeortic aneurysm", "acromegaly", "adenocarcinoma", "analgesia", "anemia", "anesthesia", "aneurysm", "atrophy", "bradycardia", "bronchitis", "carcinoma", "asystole", "cardiomegaly", "carditis", "cephalalgia", "cheiloschisis", "cheilosis", "cholecystectomy", "chondrodystrophy", "climacteric", "colic", "colitis", "craniotomy", "uranoplasty", "cryptorchidism", "cyanosis", "cystoplegia", "cystitis", "dehiscence", "odontalgia", "dermatitis", "diaphragm", "anaphylaxis", "hypovolemia", "hypoxia", "hyperkalemia", "hypokalemia", "hypothermia", "hypoglycemia", "hyperglycemia", "thrombosis", "thromboembolism", "epinephrine", "norepinephrine", "arrhythmia", "dysrhythmia", "ventricular fibrillation", "methylphenidate", "ibuprofen", "dyspnea", "diarrhea", "sertraline", "diazepam", "ethynol", "phenylephrine"];
// List of Global variables for script to work
var usedLetters = [];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var guessesRemaining = 8;
var wordChoice = wordDictionary[Math.floor(Math.random() * wordDictionary.length)];
var chosenWordArray = [];
var displayedAnswer = [];
var gameFinished = 0;
var winQuantity = 0;
var lossQuantity = 0;
var pushGuessed = function () { guessed.textContent = usedLetters; }
var pushLosses = function () { losses.textContent = lossQuantity; }
var pushGuessRemaining = function () { guessremain.textContent = guessesRemaining; }
var pushWins = function () { wins.textContent = winQuantity; }
var pushAnswer = function () { word.textContent = displayedAnswer; }


// Restart function, used to start game and reset after win or loss
var gameRestart = function () {
    usedLetters = [];
    guessesRemaining = 8;
    wordChoice = wordDictionary[Math.floor(Math.random() * wordDictionary.length)];
    chosenWordArray = wordChoice.split('');
    displayedAnswer = [];
    gameFinished = 0;
    pushGuessRemaining();
    pushGuessed();
    for (var i = 0; i < chosenWordArray.length; i++) {
        displayedAnswer.push(' _ ');
    };
    pushAnswer();
}

// Game cannot run without being reset (oddly), so do not remove
gameRestart();

// Game runtime code starts here
document.onkeyup = (function (event) {
    // first the variables
    var key = event.key.toLowerCase();
    // Check for the key input being a letter
    if (letters.indexOf(key) == '-1') {
        return;
    }
    // Check if letter has already been guessed
    else if (usedLetters.indexOf(key) == "-1") {

        // Correct guess branch
        if (chosenWordArray.indexOf(key) != -1) {
            usedLetters.unshift(key);
            pushGuessed();

            // more here for correct guess
        }

        // Incorrect guess branch
        else {
            guessesRemaining = guessesRemaining--;
            // If no more guesses, reset with losses increased
            if (guessesRemaining == 0) {
                lossQuantity++;
                pushLosses();
                gameRestart();
                return;
            }
            // If guesses remain, place guessed letter in guesses, end script
            else {
                usedLetters.unshift(key);
                pushGuessed();
                pushGuessRemaining();
                return;
            }
        }
    }
    else { return; }

})


