let id2 = Symbol();

let id = Symbol("description")

alert(id === id2 ); //error

let user={ name : "ali",
          [id] : 2002}

alert (user[id]);
//global symbol
let name = Symbol.for("name")
alert(Symbol.keyFor(name))

//local symbol
let name2 = Symbol("name2");
alert(Symbol.keyFor(name)) // gives you an error
alert (name2.description); //name2