alert('Alert! You can see all answers in Console after Filling the all Prompts')

// City Name
let cityName = prompt('Enter your cityName🏙️')

let cityMatch

if (
    cityName === 'Karachi' || cityName === 'karachi' ||
    cityName === 'Quetta' || cityName === 'quetta' ||
    cityName === 'Islamabad' || cityName === 'islamabad' ||
    cityName === 'Multan' || cityName === 'multan' ||
    cityName === 'Hyderabad' || cityName === 'hyderabad' ||
    cityName === 'Lahore' || cityName === 'lahore' ||
    cityName === 'Peshawar' || cityName === 'peshawar'
) {
    cityMatch = true
} else (
    cityMatch = false
)
console.log('========================================================================================================================================================================================================')

if (cityMatch === false) {
    console.log('Your city data not found')
} else {
    console.log('Welcome to ', cityName, ' city🌆')
}
console.log('=======================================================================================================================================================================================================')

//    Male or Female

let gender = prompt('Enter your Gender👨‍👩‍👧‍👦')

if (gender == 'Male' || gender == 'male') {
    console.log('🚹 Good Morning Sir.')
} else if (gender == 'Female' || gender == 'female') {
    console.log('🚺Good Morning Ma’am.')
} else {
    console.log('you did not write the correct gender👨‍👩‍👧‍👦')
}
console.log('========================================================================================================================================================================================================')

//       Traffic Lights

let lightColor = prompt('Enter the traffic light color🚦')

if (lightColor === 'Red' || lightColor === 'red') {
    console.log('Must stop🚦')
} else if (lightColor === 'Yellow' || lightColor === 'yellow') {
    console.log('Ready to move🚦')
} else if (lightColor === 'Green' || lightColor === 'green') {
    console.log('Move now🚦')
} else {
    console.log('this color light did not access in traffic light🚦')
}
console.log('========================================================================================================================================================================================================')

//      Car Fuel

let fuel = parseFloat(prompt('Enter remaining fuel in liters'))

if (fuel <= 0.25) {
    console.log('Please refill the fuel in your car')
}
else if (fuel <= 1) {
    console.log('You should refill the fuel in your car for long drive')
}
else {
    console.log('you did not write the fuel quantity')
}
console.log('======================================================================================================================================================================================================')

// Script Run

console.log('var a = 4; if (++a === 5)')
let a = 4; if (++a === 5) {
    console.log("given condition for variable a is true");
}

console.log('======================================================================================================================================================================================================')

console.log('var b = 82; if (b++ === 83)')
let b = 82;
if (b++ === 83) {
    console.log("given condition for variable b is true");
} else {
    console.log('given condition for variable b is False')
}

console.log('======================================================================================================================================================================================================')

console.log('var c = 12; if (c++ === 13){ alert("condition 1 is true");} if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); } } ')
let c = 12;
if (c++ === 13) {
    console.log("condition 1 is true");
}
else if (c === 13) {
    console.log("condition 2 is true");
}
else if (++c < 14) {
    console.log("condition 3 is true");
}
else if (c === 14) {
    console.log("condition 4 is true");
}

console.log('======================================================================================================================================================================================================')

let materialCost = Number(prompt('Enter material cost'));
let laborCost = Number(prompt('Enter labor cost'));

console.log('var materialCost = ' + materialCost + ' var laborCost = ' + laborCost + ' var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }')

let totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    console.log("The cost equals");
}else{ 
console.log('Not equal')
}

console.log('The total cost is ' + totalCost);

console.log('======================================================================================================================================================================================================')

console.log('if (true){ alert("Work"); }else{console.log("not work")}')
if (true){ 
    console.log("Work"); 
}else{
    console.log('not work')
}

console.log('======================================================================================================================================================================================================')

console.log('if (false){ alert("Work"); }else{console.log("not work")}')
if (false){ 
    console.log("Work"); 
}else{
    console.log('not work')
}

console.log('======================================================================================================================================================================================================')

console.log('if("car" < "cat"){ alert("car is smaller than cat"); }')
if("car" < "cat"){ 
    console.log("car is smaller than cat"); 
}

console.log('======================================================================================================================================================================================================')

let sub1 = Number(prompt('Enter your science subject marks'))
let sub2 = Number(prompt('Enter your urdu subject marks'))
let sub3 = Number(prompt('Enter your english subject marks'))

let totalMarks = prompt('Enter the all paper urdu, english and science total marks')
let obtainedMarks = sub1+sub2+sub3
let percentage = (obtainedMarks) / totalMarks * 100

let report
let msg

if(percentage >= 90){
    report = 'you get A grade'
}else if(percentage >= 70){
    report = 'you get B grade'
}else if(percentage >= 50){
    report = 'you get C grade'
}else if(percentage<50){
    report = 'Fail'
}else{
    report = 'You did not write obtained and total marks or anyone'
} 

if(report === 'you get A grade'){
    msg = 'Excelent'
}else if(report === 'you get B grade'){
    msg = 'Good'
}else if(report === 'you get C grade'){
    msg = 'you Need improvement'
}else if(report === 'You did not write obtained and total marks or anyone'){
    msg = "Not found"
}else{
    msg = 'Sorry'
}

console.log('Marks Sheet')
console.log('')
console.log('Total Marks: ' + totalMarks)
console.log('Obtained Marks: ' + obtainedMarks)
console.log('Percentage: ' + percentage + "%")
console.log('Grade: ' + report)
console.log('Remarks: ' + msg)

// console.log('You get', percentage+"% and", report, 'and', msg)


console.log('======================================================================================================================================================================================================')

let secretNumber = 7;
let guess = Number(prompt('Guess the secret number (1 to 10)'));

console.log('Guess the Secret Number Section')

if(guess === secretNumber){
    console.log('Bingo! Correct answer')
}else if((guess + 1) === secretNumber){
    console.log('6 Close to the correct answer');
}else if((guess - 1) === secretNumber){
    console.log('8 Close to the correct answer');
}else{
    console.log('Try Again')
}

console.log('======================================================================================================================================================================================================')

let divisible = Number(prompt('Enter the the number i will tell you the num is divisible by 3 or not'))
let divisibleAnswer = divisible % 3

if(divisibleAnswer === 0){
    console.log(divisible + ' is divisible by 3 because the remainder is ' + divisibleAnswer)
}else{
    console.log(divisible + ' is not divisible by 3 because the remainder is ' + divisibleAnswer)
}

console.log('======================================================================================================================================================================================================')

let checknum = Number(prompt('Enter the number for checking even or add'))
let checkNumremainder = checknum % 2
if(checkNumremainder === 0){
    console.log('Your Number ' + checknum + ' is Even')
}else{
    console.log('Your Number ' + checknum + ' is Odd')
}

console.log('======================================================================================================================================================================================================')

let temperture = Number(prompt('Enter the temperature in Celsius'))

if(temperture>40){
    console.log('It is too hot outside.')
}else if(temperture>30){
    console.log('It is little bit hot outside.')
}else if(temperture>25){
    console.log('Today’s Weather is Normal')
}else if(temperture>20){
    console.log('Today’s weather is Cool.')
}else if(temperture>10){
    console.log('OMG! Today’s weather is so Cool.')
}else{
    console.log('Temperture is very very cold and A human can"t survive without preparing')
}

console.log('======================================================================================================================================================================================================')

let num1 = Number(prompt('Enter the number1'))
let num2 = Number(prompt('Enter the number2'))

console.log(num1 + ' + ' + num2 + ' = ' + (num1 + num2))
console.log(num1 + ' - ' + num2 + ' = ' + (num1 - num2))
console.log(num1 + ' / ' + num2 + ' = ' + num1 / num2)
console.log(num1 + ' * ' + num2 + ' = ' + num1 * num2)
console.log(num1 + ' % ' + num2 + ' = ' + num1 % num2)
