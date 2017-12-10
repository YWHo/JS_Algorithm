// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {

    var firstArr = arr[0];
    var secondArr = arr[1];

    for (var i = 0; i < secondArr.length; i++) {
        var letter = secondArr[i];
        var letterLower = letter.toLowerCase();
        var letterUpper = letter.toUpperCase();

        if (firstArr.indexOf(letterLower) === -1 &&
            firstArr.indexOf(letterUpper) === -1) {
            return false;
        }
    }

    return true;
}

var x = mutation(["hello", "hey"]);
console.log(x);