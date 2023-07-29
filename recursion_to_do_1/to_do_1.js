function rSigma(num) {
    if (num <= 0) {
        return 0;
    }

    return Math.floor(num) + rSigma(Math.floor(num) - 1);
}

function rFact(num) {
    if (num <= 0) {
        return 1;
    }

    return Math.floor(num) * rFact(Math.floor(num) - 1);
}

//-------------------------------------------

// Recursive Sigma

console.log("Recursive Sigma");


console.log(rSigma(5));
console.log(rSigma(2.5));
console.log(rSigma(-1));


console.log("-----")

//-------------------------------------------

// Recursive Factorial

console.log("Recursive Factorial");


console.log(rFact(3));
console.log(rFact(6.5));


console.log("-----")

//-------------------------------------------
