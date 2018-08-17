// Dictionary for the hangman word choice
var wordDictionary = []; // To be populated later

var wordChoice = wordDictionary[Math.floor(Math.random() * wordDictionary.length)];
var playerInput = document.onkeyup.toLowerCase;
// Filtering out numeric and special input to allow only lowercase letter inputs
var letters = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]
var inputCheck = function() {if (letters.indexOf(playerInput) != -1) {

}}