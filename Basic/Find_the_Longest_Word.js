// Return the length of the longest word in the provided sentence.

function findLongestWord(str) {
    var arr = str.split(" ");
    var longest = 0;
    arr.forEach(function(word) {
        if (word.length > longest) {
            longest = word.length;
        }
    });
    return longest;
}

var x = findLongestWord("The quick brown fox jumped over the lazy dog");
console.log(x);
