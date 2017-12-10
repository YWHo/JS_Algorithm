// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {

    var strArr = Array.from(arr);
    var args = Array.from(arguments);

    result = strArr.filter(function (item) {
        for (var i = 0; i < args.length; i++) {
            if (item === args[i]) {
                return false;
            }
        }
        return true;
    });


    return result;
}

var x = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(x);