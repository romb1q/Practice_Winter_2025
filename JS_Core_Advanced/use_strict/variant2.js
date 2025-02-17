'use strict';
function findValueInArray(array, value) {
    return array.find(el => el === value) ? true : false
}
console.log(findValueInArray([1,2,3,4,5,6], 5));
