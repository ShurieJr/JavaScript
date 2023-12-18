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