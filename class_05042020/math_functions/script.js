function math(func, ...params) {
    return func(params);
}
function myRound(values) {
    num = values[0].toString(10);
    num = num.split('.');
    if (num.length > 1) {
        if (parseInt(num[1]) >= 5) {
            return parseInt(num[0]) + 1;
            
        } else {
            return parseInt(num[0]);
        }
    } else {
        return values[0];
    }
}

function myPow(params) {
    let a = params[0];
    let b = params[1];
    if (b == 0) {
        return 1;
    } else {
        return a * myPow([a, b - 1]);
    } 
}

function mySqrt(params){
    let val = params[0];
    let x = val;
    let y = 1;
    let e = 0.000001;
    
    while (x - y > e) {
        x = (x + y) / 2;
        y = val / x;
    }
    return parseFloat('.' + x.toString(10).split('.')[1]) > .0001 ? x : parseInt(x);
}

function myAbs(params){
    val = params[0];
    return val < -1 ?  val * -1 : val;
}

function myCeil(values) {
    num = values[0].toString(10);
    num = num.split('.');
    if (num.length > 1) {
        return parseInt(num[0]) + 1;
    } else {
        return values[0];
    }
}


function myFloor(values) {
    num = values[0].toString(10);
    num = num.split('.');
    if (num.length > 1) {
        return parseInt(num[0]);
    } else {
        return values[0];
    }
}

//parameter - list of numbers
function myMax(params) {
    let max = params[0];
    params.forEach(element => {
        max = element > max ? element : max;
    })
    return max;
}

//parameter - list of numbers
function myMin(params) {
    let min = params[0];
    params.forEach(element => {
        min = element < min ? element : min;
    })
    return min;
}

var randomSeed = 50;
//parameter - int - number of digits in random number
function myRandom(digits) {
    let random = ((new Date()).getTime() + randomSeed);
    let returnVal = 0;
    randomSeed = random;
    for (let i = 0; i < digits; i++) {
        returnVal = (returnVal * 10) + (random % 10);
        random = parseInt(random / 10);
    }
    return returnVal.toString().length < digits ?  parseInt(returnVal.toString() + '0') : returnVal;
}

console.log("Round demo : ", math(myRound, 11));
console.log("Pow demo : ", math(myPow, 2, 3));
console.log("square root demo : ", math(mySqrt, 10));
console.log("Abs demo : ",math(myAbs, -10.2));
console.log("Ceil demo : ", math(myCeil, 10.2));
console.log("Floor demo : ", math(myFloor, 10.2));
console.log("Max demo : ", math(myMax, -10, -20, -30));
console.log("min demo : ", math(myMin, -10, -20, -30));
//generate 10 random numbers
for (let i = 0; i < 10; i ++) {
    console.log("Random demo : ", math(myRandom, 3));
}

