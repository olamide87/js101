console.log('less is more');

const wordLength = () => {
    return word.length;
};

console.log('num of letters', wordLength('cat'));
console.log('num of letter', wordLength ('monkeybutt'));

const ageCheck = () => {
    if(age >= 21){
        console.log('party!!!!!!');
    } else {
        console.log('no driks for you');
    }

};

ageCheck(12);
ageCheck(24);

const expense = {
    dateCreate: '01/17/2020',
    location: 'Baja Burrito',
    cost: 12.57,
    isGood: true
};

// dot notation
console.log(expense.cost);

// brack notation
console.log(expens['cost']);

const employee = {
    lastname: 'Olamide'
    startDate: '11/25/19',
    salary: 45000,
    industry: 'healthcare',
    dept: ultrasound
    passedDrugScreen: true,
    firstName: 'Oladinni',

    
};

const statusMaker = (employee) => {
    if (employee.firstName[0] === 'M') {
        employee.status = 'vip';
    }  else {
        employee.status = 'peasant';
    } else {
        employee.status = 'vip';
    }

};

console.log(employee)
