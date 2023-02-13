export const generateRandomNumber = function(minimum ,maximum){
    return Math.floor(Math.random()*(maximum-minimum))+minimum;
}
console.log(generateRandomNumber(100,1000));