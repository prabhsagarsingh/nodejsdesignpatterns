const a = require('./a')
const b = require('./b')

console.log("a--> ", JSON.stringify(a))
console.log("b--> ", JSON.stringify(b))


/*
a-->  {"b":{"a":{"loaded":false},"loaded":true},"loaded":true}
b-->  {"a":{"loaded":false},"loaded":true}
*/