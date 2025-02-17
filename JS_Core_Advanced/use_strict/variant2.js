'use strict';
function findValueInArray(array, value) {
    if (array.find(el => el === value ? true : false)) {
        return true;
    }
    else{
        return false;
    }
}
console.log(findValueInArray([1,2,3,4,5,6], 5));
