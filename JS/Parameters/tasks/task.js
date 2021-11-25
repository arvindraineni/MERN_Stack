
/// Occurences of character in  a string

let str = "abcbcbbbccbbbbbbcc";
let counts = {};
let ch, index, len, count;

// Loop through the string...
for (index = 0, len = str.length; index < len; ++index) {
    // Get this character
    ch = str.charAt(index); 
    count = counts[ch];
    counts[ch] = count ? count + 1 : 1;
}
for (ch in counts) {
    console.log(ch + " count: " + counts[ch]);
}



/// Function that receives a string, reverses it, and then returns it

function reverseString(str) {
    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
// take input from the user
const string = ('Arvind');
const result = reverseString(string);
console.log(result);



/// Function that takes student obj with marks as an argument, destructure it, and return the average of marks.

function student(marks){
    let
}