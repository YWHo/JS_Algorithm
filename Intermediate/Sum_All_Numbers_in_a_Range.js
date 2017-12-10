//an array of two numbers. Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.

function sumAll(arr) {

    var min = Math.min(arr[0], arr[1]);
    var max = Math.max(arr[0], arr[1]);
    var result = 0;

    for (var i=min; i<=max; i++) {
        result += i;
    }
    
    return result;
}

var x = sumAll([1, 4]);
console.log(x);