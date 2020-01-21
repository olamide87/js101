console.log('functions');
const nuggetizer = (animal) => {
    const output =`processed ${animal}`;
return output

};

console.log(nuggetizer('chicken'));
console.log(nuggetizer('pig'));
console.log(nuggetizer('cow'));
console.log(nuggetizer('fishn'));
console.log(nuggetizer('tire'));

const dogBreed = (dog) => {
    return `my favorite dog breed is ${dog}`
};
console.log(dogBreed('lab'));


const fortyTwo = (number) => {
    return 42 + number;
    
};

console.log(fortyTwo(4));

const oldAge = (birthYear) => {
    return 2099 - birthYear;
};

console.log(oldAge(1987))

