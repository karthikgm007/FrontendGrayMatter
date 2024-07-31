console.log("Hello");
var num = 56;
if (num % 2 == 0) {
  console.log(num + " is even");
} else {
  console.log(num + " is odd");
}

//DemoOnLet
{
  let b = 10; //block scope
  var a = 20; //global scope
  console.log(a);

  const c = 3.14; //final value and block scope
}

console.log(a);
// console.log(b); //not accesible
// console.log(c);

//DemoOnSwitch
let num1 = 1;
switch (num1) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Invalid");
}

//DemoOnControlStatements

let num2 = 10;
while(num2>0){
  console.log(num2--);
}

for(let num=0;num<=10;num++){
  console.log(num);
}

//CheckPalindrome
num = 45677654;
let temp = num;
let rem, rev = 0;
while(num>0){
  rem=num%10;
  rev=rev*10+rem;
  num=Math.floor(num/10);
}

if(rev==temp)  {
  console.log("Palindrome");
}else{
  console.log("Not Palindrome");
}

var str = "Hello";
var revStr = str.split("").reverse().join("");
console.log(revStr);

if(str==revStr){
  console.log("Palindrome");
}else {
  console.log("Not Palindrome");
}

//DemoOnBuiltInFunctions
//Math funtions
console.log(Math.pow(2, 4));
console.log(Math.sqrt(16));
console.log(Math.ceil(35.02));
console.log(Math.round(35.5));
console.log(Math.floor(35.52));
console.log(Math.floor(Math.random() * 10) + 1);

//Strings
let str = "JavaScript";
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.replace("Java", "Type"));
console.log(str.slice(0, 4));
console.log(str.substring(0, 4));
console.log(str.concat(" is a programming language"));
console.log(str.charAt(0));
console.log(str.charCodeAt(0));
console.log(str.split("").length); //No. of characters
console.log(str.split(" ").length); //words
console.log(str.split("").reverse().join(""));
console.log(str.search("vaSc"));

//Dates
let date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.getMonth()+1);
let strDate = '2023-01-01';
console.log(new Date(strDate));

//Array Functions
let arr = [1, 25, 3, 4, 5];
console.log(arr);
//search for a key
console.log(arr.indexOf(3));
//add an element  
arr.push(6);
console.log(arr);
//remove an element
arr.pop();
console.log(arr);
//remove first element
arr.shift();
console.log(arr);
//add first element
arr.unshift(0);
console.log(arr);
//sort the array
arr.sort();
console.log(arr);
//reverse the array
arr.reverse();
console.log(arr);
//slice the array
console.log(arr.slice(1, 3));
//splice the array
arr.splice(1, 2, 3, 4, 5);
console.log(arr);





 