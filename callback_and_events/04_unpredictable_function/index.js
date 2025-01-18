const fs = require('fs')

const cache = new Map();

function inconsistentRead(fileName,cb) {
    if (cache.has(fileName)){
        cb(cache.get(fileName))
    } else{
        fs.readFile(fileName, 'utf-8', (err,data)=> {
            cache.set(fileName, data)
            cb (data)
        })
    }
}

function createFileReader(fileName){
    const listeners = []
    inconsistentRead(fileName,value => {
        console.log("This was called")
        listeners.forEach(listner=>listner(value))
    })

    return {
        onDataReady: listener=> listeners.push(listener)
    }
}

const reader1 = createFileReader('data.txt')
reader1.onDataReady(data=> {

    // After this function is called code for reader2  
    console.log(`First call data: ${data}`)

    // createFileReader calls and reads data 
    // but since data is now cached it is returned in sync
    // but listener is registered later when .onDataReady
    console.log("reader2 is called")
    const reader2 = createFileReader('data.txt')
    console.log("reader finished")
    reader2.onDataReady((data)=>{
        console.log(`Second call data ${data}`)
    })
})