//01. Fruit
function solve1(fruit, weight, pricePerGr) {
    console.log(`I need $${(weight * pricePerGr / 1000).toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`);
}
solve1('orange', 2500, 1.80);

//02. Greatest Common Divisor – GCD
function solve2(num1, num2) {
    let gcd = 0;

    for (let i = 1; i <= num1 && i <= num2; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            gcd = i;
        }
    }
    console.log(gcd);
}
solve2(15, 5);

//03. Same Numbers
function solve3(input){
    let isSame = true;
    let inputNumber = input.toString();
    let sumOfDigits = 0;
    let digitToCompare = +inputNumber[0];

    for (let i = 0; i < inputNumber.length; i++){
        let currentDigit = +inputNumber[i];
        sumOfDigits += currentDigit;

        if (currentDigit !== digitToCompare){
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sumOfDigits)
}
solve3(1234);

//04. Previous Day
function solve4(year, month, day) {
    
    let today = new Date(year, month, day);
    let yesterday = new Date(today)

    yesterday.setDate(yesterday.getDate() - 1)

    console.log(yesterday.getFullYear()  + '-' + (yesterday.getMonth()) + '-' + yesterday.getDate());
}
solve4(2016, 10, 1);

//05. Time to Walk
function solve5(steps, footPrint, speedKmH) {
    let distance = steps * footPrint;
    let speed = speedKmH * 1000 / 3600;
    let rest = Math.floor(distance / 500) * 60;
    let time = (distance / speed) + rest;

    let hours = Math.floor(time / 3600).toFixed(0).padStart(2, '0');
    let minutes = Math.floor(time / 60).toFixed(0).padStart(2, '0');
    let seconds = (time % 60).toFixed(0).padStart(2, '0');

    console.log(`${hours}:${minutes}:${seconds}`);
}
solve5(4000, 0.60, 5);

//06. Road Radar
function solve6(inputSpeed, area) {
    let motorway = 130;
    let interstate = 90;
    let city = 50;
    let residential = 20;
    let speed = Number(inputSpeed);
    let status = ''

    if(area == 'motorway'){
        if(speed <= motorway){
            console.log(`Driving ${speed} km/h in a ${motorway} zone`);
        }
        else if(speed < motorway + 21){
            status = 'speeding';

            console.log(`The speed is ${speed - motorway} km/h faster than the allowed speed of ${motorway} - ${status}`);
        }
        else if(speed > motorway + 20 && speed <= motorway + 40){
            status = 'excessive speeding';

            console.log(`The speed is ${speed - motorway} km/h faster than the allowed speed of ${motorway} - ${status}`);
        }
        else{
            status = 'reckless driving';

            console.log(`The speed is ${speed - motorway} km/h faster than the allowed speed of ${motorway} - ${status}`);
        }
        
    }
    else if(area == 'interstate'){
        if(speed <= interstate){
            console.log(`Driving ${speed} km/h in a ${interstate} zone`);
        }
        else if(speed < interstate + 21){
            status = 'speeding';

            console.log(`The speed is ${speed - interstate} km/h faster than the allowed speed of ${interstate} - ${status}`);
        }
        else if(speed > interstate + 20 && speed <= interstate + 40){
            status = 'excessive speeding';

            console.log(`The speed is ${speed - interstate} km/h faster than the allowed speed of ${interstate} - ${status}`);
        }
        else{
            status = 'reckless driving';

            console.log(`The speed is ${speed - interstate} km/h faster than the allowed speed of ${interstate} - ${status}`);
        }
    }
    else if(area == 'city'){
        if(speed <= city){
            console.log(`Driving ${speed} km/h in a ${city} zone`);
        }
        else if(speed < city + 20){
            status = 'speeding';

            console.log(`The speed is ${speed - city} km/h faster than the allowed speed of ${city} - ${status}`);
        }
        else if(speed > city + 20 && speed <= city + 40){
            status = 'excessive speeding';

            console.log(`The speed is ${speed - city} km/h faster than the allowed speed of ${city} - ${status}`);
        }
        else{
            status = 'reckless driving';

            console.log(`The speed is ${speed - city} km/h faster than the allowed speed of ${city} - ${status}`);
        }
    }
    else if(area == 'residential'){
        if(speed <= residential){
            console.log(`Driving ${speed} km/h in a ${residential} zone`);
        }
        else if(speed < residential + 20){
            status = 'speeding';

            console.log(`The speed is ${speed - residential} km/h faster than the allowed speed of ${residential} - ${status}`);
        }
        else if(speed > residential + 20 && speed <= residential + 40){
            status = 'excessive speeding';

            console.log(`The speed is ${speed - residential} km/h faster than the allowed speed of ${residential} - ${status}`);
        }
        else{
            status = 'reckless driving';

            console.log(`The speed is ${speed - residential} km/h faster than the allowed speed of ${residential} - ${status}`);
        }
    }
}
solve6(20, 'residential');

//07. Cooking by Numbers
function solve7(number, commands0, commands1, commands2, commands3, commands4) {
    let result = Number(number)
    let commands = new Array(commands0, commands1, commands2, commands3, commands4);

    for(let i = 0; i < commands.length; i++){
        if(commands[i] == 'chop'){
            result /= 2;
            console.log(result);
        }
        else if(commands[i] == 'dice'){
            result = Math.sqrt(result);
            console.log(result);
        }
        else if(commands[i] == 'spice'){
            result += 1;
            console.log(result);
        }
        else if(commands[i] == 'bake'){
            result *= 3;
            console.log(result);
        }
        else if(commands[i] == 'fillet'){
            result -= result * 0.20;
            console.log(result);
        }
    }
}
solve7(9, 'dice', 'spice', 'chop', 'bake', 'fillet');

//08. Validity Checker
function solve8(x1, y1, x2, y2) {
    let comparisons1 = Math.sqrt(Math.pow(x1 - y1, 2) + Math.pow(0 - 0, 2));
    let comparisons2 = Math.sqrt(Math.pow(x2 - y2, 2) + Math.pow(0 - 0, 2));
    let comparisons3 = Math.sqrt(Math.pow(x1 - y1, 2) + Math.pow(x2 - y2, 2));

    if(Number.isInteger(comparisons1)){
        console.log(`{${x1}, ${y1}} to {0, 0} is 'valid'`);
    }
    else{
        console.log(`{${x1}, ${y1}} to {0, 0} is 'invalid'`);
    }

    if(Number.isInteger(comparisons2)){
        console.log(`{${x2}, ${y2}} to {0, 0} is 'valid'`);
    }
    else{
        console.log(`{${x2}, ${y2}} to {0, 0} is 'invalid'`);
    }
    
    if(Number.isInteger(comparisons3)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is 'valid'`);
    }
    else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is 'invalid'`);
    }

    
}
solve8(2, 1, 1, 1);