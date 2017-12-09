// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
    var repeatStr = "";

    for(var i=0; i<num; i+=1) {
        repeatStr += str;
    }

    return repeatStr;
}

var x = repeatStringNumTimes("abc", 3);
console.log(x);