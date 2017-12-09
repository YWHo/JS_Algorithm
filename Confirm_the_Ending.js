// Check if a string (first argument, str) ends with the given target string (second argument, target).
// Note: don't use '.endWith()' method

function confirmEnding(str, target) {
    
    if (str.length < target.length) {
        return false;
    }

    var endingStr = str.substring(str.length - target.length);

    if (endingStr == target) {
        return true;
    } else {
        return false;
    }

}

var x = confirmEnding("Bastian", "n");
console.log(x);