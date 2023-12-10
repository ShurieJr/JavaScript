//Arrays
const numbers=new Array (1 , 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10);
numbers[4]  = 100;
console.log(numbers[4] + numbers[5]);

const fruits = ['orange','mango', 'tomato'];
fruits[0] = 'grabes';
fruits.push('banana');//add 'banana'to the ground of the array
fruits.unshift('avocado'); //add to array from the beginning
fruits.pop(); //remove the last element
console.log(fruits);

//check of this an array or not
console.log(Array.isArray(fruits));
console.log(fruits.length);
console.log(fruits.reverse());
console.log(fruits.concat(numbers));
console.log(fruits.lastIndexOf('tomato'));