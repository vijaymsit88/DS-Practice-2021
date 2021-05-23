//Below program returns the first reoccuring number within a list of numbers.

function firstReoccuringChar(array) {
const repMap = {};
for (i=0; i<array.length; i++){
    if(repMap[array[i]]) {
        return array[i];
    } else {
        repMap[array[i]] = 1; //it can be true as well
    }
}
return undefined;
}

console.log(firstReoccuringChar([4,7,11,3,5,1,2,4]));