function addCps(a,b,callback) {
    let res = a + b;
    callback(res);
}

console.log("Before cps")
addCps(4,3,(result)=>{
    console.log("This is the sum ", result)
})
console.log("After cps")