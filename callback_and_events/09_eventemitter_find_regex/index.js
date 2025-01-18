const fs = require('fs');
const Event = require('events');

function findRegex (files, regex) {
    const emitter = new Event.EventEmitter();
    for (const file of files) {
        fs.readFile(file,'utf-8', (err,content)=>{
            if (err) return emitter.emit('err',err);

            emitter.emit("fileread",file);

            const match = content.match(regex)
            if (match) {
                match.forEach(elem => emitter.emit('found',file,elem))
            }
        })
    }
    return emitter;
}

findRegex(
    ['fileA.txt','fileB.json'],
    "/hello \w+g"
).on('fileread', file=> console.log(`${file} was read`))
 .on("found", (file,match)=> console.log(`Matched ${match} found in ${file}`))
 .on("error", err => console.error(`Error emitted ${err.message}`))