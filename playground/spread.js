function add(a,b){
  return a+b;
}

console.log(add(3,1));

var toAdd = [9,5];
console.log(add(...toAdd));


var groupA = ['a','b'];
var groupB = ['c'];
var final = [...groupB,1,...groupA];

console.log(final);


var person1 = ['thethai',20];
var person2 = ['thaithe',26];

function greet (name,age){
  console.log('Hi '+name+' you are '+age);
  console.log('hi',...person1);

}

greet(...person1);
greet(...person2);


var names = ['mike','ben'];
var final = ['andrew',...names];

final.forEach(function (a){
  console.log('Hi',a);
});
