// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {

    if (num >= str.length) {
        return str;
    } else if (num-3 > 0) {
        return str.substring(0, num-3) + "...";
    } else {
        return str.substring(0, num) + "...";
    }

}

var x = truncateString("A-tisket a-tasket A green and yellow basket", 11);
console.log(x);
x = truncateString("A-", 1);
console.log(x);
x = truncateString("Absolutely Longer", 2);
console.log(x);