// exercise 1 
console.log("\nExercies 1");

const cat = {
    name: "Garfield",
    age: 3,
    isCute: true
}

console.log(cat);
console.log(cat.age);

if (cat.isCute) {
    console.log("So cute!");
}

// exercise 2
console.log("\nExercies 2");

const cat2 = {
    name: "Bob",
    age: 8,
    isCute: true
}
const cats = [cat, cat2];

console.log(cat.age);
console.log(cat['age']);
console.log(cat2.isCute);
console.log(cat2['isCute']);

// exercise 3
console.log("\nExercies 3");

function checkIfEven(num) {
    if (num % 2 === 0) {
        console.log("Num is even");
    } else {
        console.log("Num is odd");
    }
}

checkIfEven(2);
checkIfEven(13);

// exercise 4
console.log("\nExercies 4");

function compare(num1, num2) {
    if (num1 > num2) {
        console.log("Num1 is bigger");
    } else if (num2 > num1) {
        console.log("Num2 is bigger");
    } else {
        console.log("Both are the same");
    }
}

compare(2,5);
compare(3,1);
compare(11,11);

// exercise 5
console.log("\nExercies 5");

function addUp(num) {
    let res = 0;
    for (var i = 1; i <= num; i++) {
        res += i;
    }
    return res;
}

let result = addUp(12);
console.log(result);

// exercise 6
console.log("\nExercies 6");
function format(num) {
    let minutes = Math.floor(num / 60);
    let hours = minutes / 60 >= 1 ? Math.floor(minutes / 60) : 0;
    minutes = hours >= 1 ? minutes - hours * 60 : minutes;
    let seconds = num - (hours * 3600) - (minutes * 60);
    return `${hours} : ${minutes} : ${seconds}`;
}

console.log(format(3700));
console.log(format(340));

// bonus 1 
console.log("Bonus 1");

function generatePassword(num) {
    if (num < 6 || num > 15) {
        return "error";
    } else { 
        let password = "";
        let sample = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let letterIndex;

        for (var i = 0; i < num; i ++) {
            letterIndex = Math.floor(Math.random() * sample.length);
            password += sample[letterIndex];
        }
        return password;
    }
}

let pwd = generatePassword(6);
console.log(pwd);
console.log(generatePassword(5));

// bonus 2
console.log("Bonus 2");

function launchDice(numberOfDice) {
    let result = 0;
    for (var i = 0; i < numberOfDice; i++) {
        result += Math.floor(Math.random() * 6 + 1);
    }
    return result;
}

let joueur1 = launchDice(5);
let joueur2 = launchDice(5);

if (joueur1 !== joueur2) {
    if (joueur1 > joueur2) {
        console.log("Joueur 1 won!");
    } else {
        console.log("Joueur 2 won!")
    }
} else {
    console.log("No one won! Equal scores!");
}
