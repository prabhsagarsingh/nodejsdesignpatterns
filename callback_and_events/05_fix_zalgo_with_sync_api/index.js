const fs = require('fs');

const cache = new Map();

function consistentReadSync(filename) {
    if (cache.has(filename)) {
        return cache.get(filename);
    } else {
        const data = fs.readFileSync(filename,'utf-8');
        cache.set(filename,data);
        return data;
    }
}

console.log(consistentReadSync("data.txt"));
// next call with read from the cache 
console.log(consistentReadSync("data.txt"));