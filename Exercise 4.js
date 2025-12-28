//Question16
let character = 'A';
if ((character >= 'A' && character <= 'Z') || (character >= 'a' && character <= 'z')){
    console.log(character + " is an uppercase letter");
}
else{
    console.log(character + " is a lowercase letter");
}

//Question17
let age = 25;
let hasLicense = true;
if (age >= 18 && hasLicense){
    console.log("Can drive");
}
else{
    console.log("Cannot drive");
}

//Question18
let totalAmount = 1000;
let isMember = true;
if (isMember == true){
    let discount = 0.2;
    let finalAmount = totalAmount - (totalAmount * discount);
    console.log("Final Amount for Member:", finalAmount);
}
else{
    let discount = 0.05;
    let finalAmount = totalAmount - (totalAmount * discount);
    console.log("Final Amount for Non-Member:", finalAmount);
}

//Question19
let num = 15;
for (let i = 1; i <= num; i++) {
    if (i % 3 === 0) {
    console.log(i + " is divisible by 3");
  }
}

//Question20
let hour = 14;
if (hour >= 5 && hour < 12){
    console.log("Good Morning");
}
else if (hour >= 12 && hour < 17){
    console.log("Good Afternoon");
}
else if (hour >= 17 && hour < 21){
    console.log("Good Evening");
}
else{
    console.log("Good Night");
}