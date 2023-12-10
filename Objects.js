
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