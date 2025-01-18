const fs = require('fs')
const event = require('events');

class FindRegex extends event.EventEmitter {
    constructor(regex) {
        super();
        this.regex = regex;
        this.files = [];
    }

    addFile (file) {
        this.files.push(file);
        return this;
    }

    find() {
        for (const file of this.files) {
            fs.readFile(file,'utf-8', (err,content)=> {
                if (err) return this.emit('err',err);

                this.emit('fileread', file);

                const match = content.match(this.regex)
                if (match) {
                    match.forEach(elem=>this.emit("found",file,elem))
                }
            })
        }
        return this;    
    }
}

const findRegexInstance = new FindRegex(/hello \w+/)
findRegexInstance
    .addFile("fileA.txt")
    .addFile("fileB.json")
    .find()
    .on('fileread', file=> console.log(`File was read ${file}`))
    .on('found', (file,match) => console.log(`Matched ${match} in file ${file}`))
    .on('error', err=> console.error(`Error emitted ${err.message}`))