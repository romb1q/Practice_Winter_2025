function sumOfArraysHalf(array) {
    let sum = 0;
    let firstHalf = array.length / 2;
    for (let i = 0; i < firstHalf; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(sumOfArraysHalf([89, 2, 3, 4, 5, 6, 7, 42, 9, 10, 52, 12, 13, 14, 15]));  // 158
