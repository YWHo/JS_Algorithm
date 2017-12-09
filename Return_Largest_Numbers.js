// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {

    var tmpArr = Array.from(arr).map(function (group) {
        var largest = Array.from(group).reduce(function (a, b) {
            if (a > b) {
                return a;
            } else {
                return b;
            }
        });
        return largest;
    });

    return tmpArr;

}

var x = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(x);