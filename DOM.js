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