function solution(num) {
    const coins = [500, 100, 50, 10]; 
    let change = 1000 - num; //change 는 거스름돈
    let count = 0;   ///거스름돈의 개수
    let i = 0;   //coins 인덱스를 표현

    while (change > 0) {
        count += Math.floor(change / coins[i]); 
        change %= coins[i]; 
        i++; 
    }

    return count; 
}
console.log(solution(900)); 1
console.log(solution(550)); 5
console.log(solution(320)); 6
console.log(solution(160)); 8

function solution(arr1, arr2) {
    let totalStay = 0;

    for (let i = 0; i < 7; i++) {
        let checkinTime = arr1[i];
        let checkoutTime = arr2[i];

        let updatedCheckoutTime = checkoutTime >= 29 ? 21 : checkoutTime;

      
        let stay = updatedCheckoutTime - checkinTime;
        totalStay += stay;
   
    }

    return totalStay;
}
console.log(solution([9, 9, 8, 8, 7, 8, 9], [21, 25, 30, 29, 22, 23, 30])); // 96
console.log(solution([9, 7, 8, 9, 7, 9, 8], [23, 22, 26, 26, 29, 27, 22])); // 110
console.log(solution([9, 9, 9, 9, 7, 9, 8], [23, 23, 30, 28, 30, 23, 23])); // 102

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(s) {
    const numbers = s.split(' ').map(Number);
    let minNonPrime = Infinity;
    let maxPrime = -Infinity;
    
    for (let num of numbers) {
        if (isPrime(num)) {
            maxPrime = Math.max(maxPrime, num);
        } else {
            minNonPrime = Math.min(minNonPrime, num);
        }
    }
    
    return `${minNonPrime} ${maxPrime}`;
}

console.log(solution('2 3 4 5')); //  "4 5"
console.log(solution('15 3 10 9 7 8')); //  "8 7"


