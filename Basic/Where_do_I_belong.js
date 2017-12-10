// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {

    var sortedArr = arr.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < sortedArr.length; i += 1) {
        if (num <= sortedArr[i]) {
            return i;
        }
    }

    return sortedArr.length;
}

var x = getIndexToIns([40, 60], 50);
console.log(x); // expect: 1

x = getIndexToIns([10, 20, 30, 40, 50], 30);
console.log(x); // expect: 2

x = getIndexToIns([5, 3, 20, 3], 5);
console.log(x); // expect: 2