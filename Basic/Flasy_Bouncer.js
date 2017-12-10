// Remove all falsy values from an array.

function bouncer(arr) {

    var result = arr.filter(function (word) {
        return (!!word == true);
    });

    return result;
}

var x = bouncer([7, "ate", "", false, 9]);
console.log(x);