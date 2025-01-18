function asyncAddCps(a,b,callback) {
    setTimeout(()=>{
        callback(a+b)
    },3)
}

console.log("Before CPS")
asyncAddCps(1,5,result=> console.log(result))
console.log("After CPS")