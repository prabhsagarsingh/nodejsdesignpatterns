const glob = require('glob')

glob('data/*.txt',(err,files)=> {
    if (err) return console.err(err);

    console.log(`All files found: ${JSON.stringify(files)}`)
}).on ('match', match=>console.log(`Match Found: ${match}`))