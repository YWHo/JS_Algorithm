// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
    arr = str.split(" ");
    upArr = arr.map(function (word) {
        var caseWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        return caseWord;
    });

    return upArr.join(" ");
}

var x = titleCase("sHoRt AnD sToUt");
console.log(x);