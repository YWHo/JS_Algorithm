// Reverse the provided string

function reverseString(str) {
    strArr = str.split("");
    str = strArr.reverse().join("");
    return str;
  }
  
  var x = reverseString("hello");
  console.log(x);