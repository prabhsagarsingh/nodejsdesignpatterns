const fs = require('fs');

const cache = new Map();

function consistentReadAsync(filename,callback) {
    if (cache.has(filename)) {
        process.nextTick(()=>callback(cache.get(filename)))
    } else {
        fs.readFile(filename,'utf-8',(err,data)=>{
            cache.set(filename,data);
            callback(data);
        })
    }
}

function createFileReader (filename) {
    const listeners = []
    consistentReadAsync(filename, value=>{
        listeners.forEach(listner=>listner(value))
    })

    return {
        onDataReady: (listener) => listeners.push(listener)
    }
}

const reader1 = createFileReader("data.txt")
reader1.onDataReady(data=>{
    console.log(`Reader1 data: ${data}`)
    
    const reader2 = createFileReader("data.txt")
    reader2.onDataReady(data=>{
        console.log(`Reader2 data: ${data}`)
    })
})