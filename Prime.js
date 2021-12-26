
const number = parseInt(prompt("Enter a positive number: "));
var isPrime = true;


if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}


else if (number > 1) {


    for (var i = 2; i < number; i=i+1) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        alert(number + " is a prime number");
    } else {
        alert( number + " is a not prime number");
    }
}