//Question11
let marks = 85;
if (marks >= 90){
    console.log("Grade A");
}
else if (marks >= 80){
    console.log("Grade B");
}
else if (marks >= 70){
    console.log("Grade C");
}
else if (marks >= 60){
    console.log("Grade D");
}
else{
    console.log("Grade F");
}

//Question12
let length = 5;
let width = 10;
let perimeter = 2 * (length + width);
console.log("Perimeter:", perimeter);

//Question13
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    console.log(year + " is a leap year");
}
else{
    console.log(year + " is not a leap year");
}

//Question14
let number = 47;
if (number % 3 === 0 && number % 5 === 0){
    console.log("It is divisible by both 3 and 5");
}
if (number & 3 === 0 && number % 5 !== 0){
    console.log("It is divisible by 3 only");
}
if (number % 3 !== 0 && number % 5 === 0){
    console.log("It is divisible by 5 only");
}
if (number % 3 !== 0 && number % 5 !== 0){
    console.log("It is not divisible by either 3 or 5");
}

//Question15
let subject1 = 78;
let subject2 = 85;
let subject3 = 92;
let average = (subject1 + subject2 + subject3) / 3;
if (average >= 90){
    console.log("Excellent");
}
else if (average >= 75){
    console.log("Good");
}
else if (average >= 60){
    console.log("Average");
}
else {
    console.log("Needs improvement");
}
