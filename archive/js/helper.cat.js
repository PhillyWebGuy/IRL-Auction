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


// Assumes: len >= 0
// Returns: random sequence of letters, length len
function generateRandSeq(len, str) {
    var i, seq = "";
    for (i = 1; i <= len; i = i + 1) {
        seq += randomChar(str);
    }
    return seq;
}

// Given   : low <= high
// Returns : a random number in the range [low, high)
function randomNum(low, high) {
    return Math.random()*(high-low) + low;
}

// Given  : list is a nonempty list (array)
// Returns: a random item from the list
function randomOneOf(list) {
    return list[randomInt(0, list.length-1)];
}