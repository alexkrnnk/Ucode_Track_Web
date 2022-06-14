let number = 10;
const bInt = 20n;
let str = "Hello";
let bool = true;
let nothing = null;
let undef;
let object = {};
let symbol = Symbol('symbol');
function Function(){};

alert(`Number is ${typeof number}\n
BigInt is ${typeof bInt}\n
String is ${typeof str}\n
Boolean is ${typeof bool}\n
Null is null\n
Undefined is ${typeof undef}\n
Object is ${typeof object}\n
Symbol is ${typeof symbol}\n
Function is ${typeof Function}\n
`);

