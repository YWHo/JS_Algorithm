/* Return true if the passed string is a valid US phone number.

For this challenge you will be presented with a string such as 800-692-7753 or 
8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based
on any combination of the formats provided above. The area code is required. If the
country code is provided, you must confirm that the country code is 1. Return true
if the string is a valid US phone number; otherwise return false.

The following are examples of valid formats for US numbers:
 555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
*/

function telephoneCheck(str) {

    var regex1 = /^\s*1?\s*\d{3}(?:\s|\-)*\d{3}(?:\s|\-)*\d{4}$/;
    var regex2 = /^\s*1?\s*\(\d{3}\)\s*\d{3}(?:\s|\-)*\d{4}$/;

    return regex1.test(str) || regex2.test(str);

}

var x = telephoneCheck("555-555-5555"); // expect: true
console.log(x);

x = telephoneCheck("1 555-555-5555"); // expect: true
console.log(x);

x = telephoneCheck("1 (555) 555-5555"); // expect: true
console.log(x);

x = telephoneCheck("1 555)555-5555"); // expect: false
console.log(x);

x = telephoneCheck("(6505552368)"); // expect: false
console.log(x);