// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    
    var groupArr = [];

    while (arr.length >0) {
        groupArr.push(arr.splice(0, size));
    } 

    return groupArr;
  }
  
  var x = chunkArrayInGroups(["a", "b", "c", "d"], 2);
  console.log(x);