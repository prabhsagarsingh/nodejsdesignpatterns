const fs = require('fs')

function readJSON(filename, callback) {
    fs.readFile(filename, 'utf-8', (err,data)=>{
        let parsed;

        if (err) {
            return callback(err);
        }

        try {
            parsed = JSON.parse(data)
        } catch (ex) {
            return callback(ex)
        }

        callback(null,parsed);
    })
}


const cb = (err, data) => {
    if (err) return console.error(err)

    console.log(data)
}

readJSON("valid_json.json",cb)
readJSON("invalid_json.json",cb)
readJSON("valid_json.json",cb)