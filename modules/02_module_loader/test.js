function loadModule(filename, myModule, require) {

    const source = `
        (function(filename, myModule, require){
            myModule.exports.prabh = "sagar";
            filename = "new_file_bro";
            myModule.node = true;
        })(filename, myModule, require);
    `
    eval(source);

    console.log(myModule);
    console.log(filename);

}


let filename = "faltu ";
let myModule = {
    exports: {}
}

loadModule(filename, myModule, require);