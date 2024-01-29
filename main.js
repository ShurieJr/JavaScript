//let , var , const
var x=5;
let y=5;
const AGE=23;
console.log(x);

const num = 5;
const Name = 'ali';
const isMajor = false;
const grade = 4.5;
const w= undefined;
const m = null;
let u;

console.log("my name is " + Name);
console.log(`my name is ${Name}`);
console.log(typeof Name);
console.log(typeof Name === 'string');

let total = (1+2 , 3+5); // comma in expressions
console.log("total : " + total);

//bitwise operators
let bb = 5;
console.log("bb: " + bb);
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


//object literals
const person = {
    name: 'ali',
    age: 23,
    hobbies: ['Quran' , 'books' , 'football'],
    address: {
        street: 'wadnaha',
        city:'Mogadishu'
    }
}
console.log(person.hobbies[0]);
console.log(person.name);
console.log(person.address.street);

// we can pull variables from the object
const {name, age } = person;
console.log(name)

// todos example
const todos=[
    {
        id:1,
        name: 'ali',
        address: 'howlwadag'
    },
    {
        id:2,
        name: 'Mohamed',
        address: {
            street: 'wadnaha',
            city:'Mogadishu'
        }
    }
]
console.log(todos[1])
console.log(todos[1].address.city)

//loops
    //for loop
    console.log("for loop ---------------------------------")
    for(let i=0; i<10; i++){
    console.log('Number : ' + i);
    }

    //break and continue
    console.log("Break ! for loop ---------------------------------")
    for(let i=0; i<10; i++){
        if( i == 5 )
            break;
        console.log('Number : ' + i);
        }
        console.log("Continue ! for loop ---------------------------------")
    for(let i=0; i<10; i0++){
        if( i == 5 )
            continue;
        console.log('Number : ' + i);
        }
        /// labels for break and continue
        outer : for(let i=0; i<3; i++){
            for(let j=0; j<3; j++){
                let input= prompt(`Enter number: (${i} , ${j})` , '' );
                if(!input) break outer;
            }
        }
            alert(`done`);
    //while loop
    let i=0;
    console.log("WHILE loop --------------------------------")
    while(i<10){
        console.log('Number : ' + i);
        i++;
    }

    //Do while
    y = 0;
    console.log("DO WHILE loop --------------------------------")
    do{
        console.log('Number : ' + y);
        y++;
    }while(y<10);


    //foreach loop --------------------------------
    fruits.forEach(element => {
        console.log('element : ' + element)
    });

    for (let element of fruits) {
        console.log('element : ' + element)
    }

    //foreach
    todos.forEach(function(todos) {
        console.log(todos.name);
    });

   const result = todos.filter(function(todos){
        return todos.name === 'ali';
    });
    console.log(result);

    //SELECTIONS:
    //IF
    let a = 10; 
    if (a === 10)
        console.log('a === 10 : true'); 

        //if else
        if (a === 10)
        console.log('a === 10 : true'); 
     else
     console.log('a === 10 : false');
    

     //if else if

  if (a === 10)
        console.log('a === 10 : true'); 
     else if (a === 20)
     console.log('a === 20 : true'); 
    else
    console.log('invalid number'); 

//ternarty operator ?
ag=3;
let re = (ag > 25) ?true : false;
console.log("re: " + re)

// ?? returns nullish
let user = "ali";
alert(user ?? "Anonymous");

    //switch
    let day =8;
    switch (day){
        case 1:
            console.log('sabti'); 
            break;
        case 2:
            console.log('axad'); 
            break;
        case 3:
            console.log('isniin'); 
            break;
        case 4:
            console.log('talaado'); 
            break;
        case 5:
            console.log('arbaco'); 
            break;
        case 6:
            console.log('khamiis'); 
            break;
        case 7:
        case 8:
            console.log('jimco'); 
            break;
        default:
                console.log('invalid day!');
                break;
    }

    //functions
    //1. create a new function 
    function addnums(num1 , num2){
        return num1 + num2;
    }
    console.log('addnums(2,3) = ' + addnums(2, 3));
    //you can assign a function parameter to a default values
    function printName(Name='ALI'){
        console.log('printName : ' + Name);
    }
    //you can call printName without arguments
    printName();

    //2. create an arrow function
    const addn = (num1, num2) => { //if it is one statement the curly brackets is an optional
        //and also the () for the parameters is optional when there is only one parameter
        return num1 + num2;
    }

    let answer = addn(1, 2);
    console.log('answer : ' + answer);


    //classes
    class Circle{
        constructor(radius){
            this.radius = radius;
        }
        getadius(){ return this.radius; }

        getArea(){ return this.radius * this.radius * Math.PI;}
    }

    //create an pobject from the class
    const c1 = new Circle(2);
console.log(c1);
    console.log(c1.getadius());

    console.log(c1.getArea());


    //Dom 
    //single element selector
    console.log(document.getElementById('my-form'));
    console.log(document.querySelector('email'));

    //multiple elements selector
console.log(document.querySelector('container'));
console.log(document.getElementsByClassName('btn'));
console.log(document.getElementsByTagName('button'));

const ul = document.querySelector('.items');

//ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.lastElementChild.innerHTML = `<h1> Hello </h1>`;
 ul.children[0].innerHTML = `Item 1`;

 //evenet listner
 const btn = document.querySelector('.btn');
 btn.style.backgroundColor ='red';

//  btn.addEventListener('click', (e) => {
//     e.preventDefault();

//    document.querySelector('body').classList.add('bg-dark');
//  });

 const myForm = document.querySelector('#my-form');
 const inputName = document.querySelector('#name');
 const inputEmail = document.querySelector('#email');
 const msg = document.querySelector('.msg');
 const userList = document.querySelector('#users');

 myForm.addEventListener('submit', onsubmit);

 function onsubmit(e){
    e.preventDefault();
  
    if (inputName.value === '' || inputEmail.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'plz fill the blanks';
    setTimeout(() => msg.remove() , 3000);
 }
 else{
    // Create new list item with user
  const li = document.createElement('li');

    // Add text node with input values
  
li.appendChild(document.createTextNode(`${inputName.value} : ${inputEmail.value}`));
    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    inputName.value = '';
    inputEmail.value = '';
  }
 }

 //btnclick evenlistner
document.getElementById('btnclick').onclick = msg;
 function msg(){
    document.alert("WELCOME TO JS! MOHAMED ABDULLAHI");
 }


 function myFunction() {
    document.getElementById("demo").style.color = "red";
    alert("changed!");
  }
 