// Dictionary for the hangman word choice
var wordDictionary = ["abdominoplasty", "abdominal aeortic aneurysm", "acromegaly", "adenocarcinoma", "analgesia", "anemia", "anesthesia", "aneurysm", "atrophy", "bradycardia", "bronchitis", "carcinoma", "asystole", "cardiomegaly", "carditis", "cephalalgia", "cheiloschisis", "cheilosis", "cholecystectomy", "chondrodystrophy", "climacteric", "colic", "colitis", "craniotomy", "uranoplasty", "cryptorchidism", "cyanosis", "cystoplegia", "cystitis", "dehiscence", "odontalgia", "dermatitis", "diaphragm", "anaphylaxis", "hypovolemia", "hypoxia", "hyperkalemia", "hypokalemia", "hypothermia", "hypoglycemia", "hyperglycemia", "thrombosis", "thromboembolism", "epinephrine", "norepinephrine", "arrhythmia", "dysrhythmia", "ventricular fibrillation", "methylphenidate", "ibuprofen", "dyspnea", "diarrhea", "sertraline", "diazepam", "ethynol", "phenylephrine"];
// var key = event.key;
var usedLetters = [];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var guessesRemaining = 8;
var wordChoice = wordDictionary[Math.floor(Math.random() * wordDictionary.length)];
var chosenWordArray = [];
var displayedAnswer = [];
var gameFinished = 0;
var winQuantity = 0;
var lossQuantity = 0;
var gameRestart = function () {
    usedLetters = [];
    guessesRemaining = 8;
    wordChoice = wordDictionary[Math.floor(Math.random() * wordDictionary.length)];
    chosenWordArray = wordChoice.split('');
    displayedAnswer = [];
    gameFinished = 0;
    for (var i = 0; i < chosenWordArray.length; i++) {
        displayedAnswer.push(' _ ');
        };
}


document.onkeyup = (function(event) {
    var key = event.key;
    var word = document.getElementById("word");
    var htmlGuessed = document.getElementById("guessed");
    var guessRemain = document.getElementById("guessremain");
    if (letters.indexOf(key.toLowerCase()) == '-1') {
        return;
    }
    else {
        
    }
})
// Filtering out numeric and special input to allow only lowercase letter inputs

var inputCheck = function () {
    if (letters.indexOf(playerInput) != -1) {
        // game code goes here
        if (playerInput.indexOf(wordChoice) != -1) {

        }
        else {
            guessesRemaining = guessesRemaining--;
            usedLetters.unshift(key);
        }
    }

}
