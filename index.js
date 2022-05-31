function Super(name) {
    this.name = name;
    this.colors = ['red', 'black', 'white'];
}

Super.prototype.sayName = function(){
    console.log(this.name);
}

function Sub(name, age) {
    Super.call(this, name);
    this.age = age;
}

Sub.prototype = new Super('Haha');

Sub.prototype.sayAge = function(){
    console.log(this.age);
}

let instance1 = new Sub('fuck',15);
instance1.colors.push('green');
console.log(instance1);

let instance2 = new Sub('fuck',15);
console.log(instance2);

