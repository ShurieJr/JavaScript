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

//map
const results = todos.map(function(todos){
      return todos.name === 'ali';
});
console.log(result);