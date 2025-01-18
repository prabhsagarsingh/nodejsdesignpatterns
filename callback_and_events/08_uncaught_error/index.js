const fs = require('fs')

function readJSONThrows (filename, callback) {
    fs.readFile(filename, 'utf-8', (err,data)=>{
        if (err) return callback(err);

        callback(null, JSON.parse(data))
    })
}

try {
    readJSONThrows("invalid_json.json", (err)=> console.err(err))
} catch(ex) {
    console.log("This will not catch the exception")
}

process.on('uncaughtException', (err)=>{
    console.error("This will catch the exception",err)
    process.exit(1);
})