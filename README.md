# codeWarsSolutions

# Hello World Function
To begin this project, I attempted to create this function without checking my notes or previous work. This led to an error with my arrow syntax and the string I placed inside the first brackets of the function:

const greet = ("hello world!") => {
  return greet
}
console.log(greet);

After this, I checked through my notes and found my errors. I replaced the string in the first brackets with nothing, and removed the "return greet" and replaced it with a console log for the string "Hello World!". Finally, I replaced the final console.log with the correct function execution "greet()"

const greet = () => {
  console.log("Hello World!");
};
greet();

This however presented a new problem on the codewars website. The console log was returning hello world!, however, the task wanted to see 'hello world!'. To fix this, I made some final adjustments to my code. First, I replaced const with function to better outline the purpose of the code. Then, I re-wrote the return code with the wanted string as opposed to another variable. Finally, I added a console log to the final greet() function executer. 

function greet() {
  return "hello world!";
}
console.log(greet());

# You Only Need One
For this project, I was provided with an array, a value, and a function to check if the array contained said value. I began with this provided code:

function check(a, x) {
  // your code here
}

To solve this, I simply returned the array using the .includes() method to display whether or not the code array contained x.

function check(a, x) {
  return a.includes(x)
}

# Reversed Sequence
For this challenge, I needed to build a function that returns an array of integers from n to 1 where n>0.



