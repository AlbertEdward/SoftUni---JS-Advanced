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