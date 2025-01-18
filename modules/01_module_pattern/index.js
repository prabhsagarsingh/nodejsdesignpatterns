const myModule = (() => {
    const _privateVar = "I'm private";
    const _privateFunc = () => {console.log("Private function was called")} 

    const exported = {
        publicVar : "I'm public" + _privateVar,
        publicFunc: function () {
            console.log("Public functino was called");
            _privateFunc();
        }
    }

    return exported;
})();

myModule.publicFunc();
console.log(myModule.publicVar);

console.log(myModule._privateVar); 
console.log(myModule._privateFunc);