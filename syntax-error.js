function isBigger (num){
    if(num > 5){
        return true;
    }
    else{
        return false;
    }
    }
// } source of syntax error

const result = isBigger(11);
// console.log(result);

// const sum = a , b => a + b;
const sum  = (a , b) => a + b;
const res = sum( 4, 6);
// console.log(res);

const musk = {
    name: 'Elon',
    // age: 40
    age: 40,
    job: 'Tesla'
}

// console.log(musk.age);

const numbers = [1, 3, 5, 6, 8, 9, 12, 14, 16, 18];
for( let i = 0; i < 10; i++){
    // const n = index[i;
    const n = numbers[i];
    // console.log(n);
}

/* if(numbers.length > 5) && (numbers[2] === 5){
    console.log('This satisfies the condition');
}
else{
    console.log('This is not satisfies the condition');
} */

if(numbers.length > 5 && numbers[2] === 5){
    console.log('This satisfies the condition');
}
else{
    console.log('This is not satisfies the condition');
}