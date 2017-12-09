// Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
    // Good luck!
      var org = str.replace(/\W+|_/g, "").toLowerCase();
      var rev = org.split("").reverse().join("");
  
      if (org == rev) {
          return true;
      } else {
          return false;
      }
  }
  
  
  
  var x = palindrome("My age is 0, 0 si ega ym");
  console.log(x);