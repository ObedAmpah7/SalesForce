const numbers = [2,3,5,4,6,7];
const filteredNumbers = numbers.filter((number) => number > 5);
console.log (filteredNumbers);

const mappedNumbers = numbers.map((number) => ({number: number + 10}));
console.log(mappedNumbers);

const reducedNumbers = numbers.reduce((preValue, currValue) => preValue * currValue);
console.log(reducedNumbers);

function findMax  (...nums) {
    let currentNum = nums[0];
    for (const num of nums) {
        if(num > currentNum){
            currentNum = num;
        } 
    }    
    return currentNum;
}
console.log(findMax (...numbers));

function findMaxMin  (...nums) {
    let MaxNum = nums[0];
    let MinNum = nums[0];
    for (const num of nums) {
        if(num > MaxNum){
            MaxNum = num;
        } 
    } 
    for (const num of nums) {
        if(num < MinNum){
            MinNum = num;
        }   
    
}
return [MaxNum,MinNum];
}

const [a,b] = findMaxMin(...numbers);
console.log(findMaxMin(...numbers));
console.log (a,b);

