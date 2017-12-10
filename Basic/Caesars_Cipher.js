// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {

    var result = "";
    for (var i=0; i<str.length; i++) {
        var num = str.charCodeAt(i);
        if ((num >= 65 && num < 78) || (num >= 97 && num < 110) ) {
            result += String.fromCharCode(num+13);
        } else if ((num >= 78 && num <= 90) || (num >= 110 && num <= 122) ) {
            result += String.fromCharCode(num-13);
        } else {
            result += str[i];
        }
    }
    return result;
}


// Change the inputs below to test
var x = rot13("Lbh qvq VG!");
console.log(x);