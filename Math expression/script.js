//          User information
// let username = prompt('Enter your name')
// alert('                                        Welcome ' + username + '\n' + username + ' you can see all answers in console after filling the all prompts')



//          First Section
console.log('                   Problem 1')

let a = 10
console.log('The value of a is ' + a)
console.log("-------------------------------------------------------")
console.log('The value of ++a is ' + ++a)
console.log('Now, The value of a is ' + a)
console.log("-------------------------------------------------------")
console.log('The value of a++ is ' + a++)
console.log('Now, The value of a is ' + a)
console.log("-------------------------------------------------------")
console.log('The value of --a is ' + --a)
console.log('Now, The value of a is ' + a)
console.log("-------------------------------------------------------")
console.log('The value of a-- is ' + a--)
console.log('Now, The value of a is ' + a)
console.log("")
console.log("-------------------------------------------------------")

//          Second Section

let x = 2
let y = 1

//             1     0     1   1
let result = --x - --y + ++y + y--

console.log("")
console.log('                   Problem 2')
let xpreminus = 'The value of --x is 1'
let ypreminus = 'The value of --y is 0'
let ypreplus = 'The value of ++y is 1'
let ypostminus = 'The value of y-- is 1'
let nowx = 'Now, The value of x is ' + x
let nowy = 'Now, The value of y is ' + y

console.log('The value of x is ' + x)
console.log('The value of y is ' + y)
console.log('(--x - --y + ++y + y--) = ?')
console.log("")
console.log('The answer is ' + result)
console.log("")
console.log(xpreminus)
console.log(ypreminus)
console.log(ypreplus)
console.log(ypostminus)
console.log("")
console.log(nowx)
console.log(nowy)

//              Third Section

console.log('')
console.log('                   Problem 3')

let table = 5
let postincreamentintable = 1

let tableof5
tableof5 = table + " x " + postincreamentintable++ + ' = ' + table 
console.log(tableof5)
tableof5 = table + " x " + postincreamentintable++ + ' = ' + table 
console.log(tableof5)
tableof5 = table + " x " + postincreamentintable++ + ' = ' + table 
console.log(tableof5)
tableof5 = table + " x " + postincreamentintable++ + ' = ' + table 
console.log(tableof5)
tableof5 = table + " x " + postincreamentintable++ + ' = ' + table 
console.log(tableof5)
tableof5 = table + " x " + postincreamentintable++ + ' = ' + table 
console.log(tableof5)
tableof5 = table + " x " + postincreamentintable++ + ' = ' + table 
console.log(tableof5)
tableof5 = table + " x " + postincreamentintable++ + ' = ' + table 
console.log(tableof5)
tableof5 = table + " x " + postincreamentintable++ + ' = ' + table 
console.log(tableof5)
tableof5 = table + " x " + postincreamentintable++ + ' = ' + table 
console.log(tableof5)

//              Fourth Section

console.log('')
console.log('                   Problem 3')
let Sub1 = prompt('Enter the First Subject Name')
let Sub2 = prompt('Enter the Second Subject Name')
let Sub3 = prompt('Enter the Third Subject Name')

let totalMarks = Number(prompt('Enter the total Marks of each subject'))
if(isNaN(totalMarks)){
    totalMarks =('Undefined')
}

let obtainedMarks1 = Number(prompt('Enter the total Marks of ' + Sub1))
if(isNaN(obtainedMarks1)){
    obtainedMarks1 =('Undefined')
}

let obtainedMarks2 = Number(prompt('Enter the total Marks of ' + Sub2))
if(isNaN(obtainedMarks2)){
    obtainedMarks2 =('Undefined')
}

let obtainedMarks3 = Number(prompt('Enter the total Marks of ' + Sub3))
if(isNaN(obtainedMarks3)){
    obtainedMarks3 =('Undefined')
}

let totalMarksofAllsubjectis = totalMarks * 3
if(isNaN(totalMarksofAllsubjectis)){
    totalMarksofAllsubjectis =('Undefined')
}

console.log('Total Marks of Each Subject is ' + totalMarks + ' and the Total Marks of all subject is ' + totalMarksofAllsubjectis)
console.log('Obtained Marks of ' + Sub1 + ' is ' + obtainedMarks1 + ', Obtained Marks of ' + Sub2 + ' is ' + obtainedMarks2 + ' and Obtained Marks of ' + Sub3 + ' is ' + obtainedMarks3)

let obtainedMarks1percentage = obtainedMarks1 / totalMarks * 100
let obtainedMarks2percentage = obtainedMarks2 / totalMarks * 100
let obtainedMarks3percentage = obtainedMarks3 / totalMarks * 100

let subadd = obtainedMarks1 + obtainedMarks2 + obtainedMarks3
let subaddpercentage = subadd / totalMarks * 100


console.log('')

console.log('You get ' + obtainedMarks1percentage + "% Marks" + ' in ' + Sub1)
console.log('You get ' + obtainedMarks2percentage + "% Marks" + ' in ' + Sub2)
console.log('You get ' + obtainedMarks3percentage + "% Marks" + ' in ' + Sub3)
console.log('Your total obtained Marks of all subject is ' + subadd)
console.log('')
console.log('Your total percentage of all subject is ' + subaddpercentage + '%')