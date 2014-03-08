var letters = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '1234567890';

// Given   : low <= high
// Returns : a random integer in the range [low, high]
function randomInt(low, high) {
    return Math.floor(Math.random()*(high-low+1)) + low;
}

// Given  : str is a nonempty string
// Returns: a random character from the string
function randomChar(str) {
    return str.charAt(randomInt(0, str.length-1));
}

