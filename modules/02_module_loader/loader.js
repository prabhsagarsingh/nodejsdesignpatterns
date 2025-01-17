const originalRequire = require;
const fs = originalRequire("fs");

function loadModule(filename, module, require) {
    const wrappedSrc = 
        `(function(module, exports, require){
            ${fs.readFileSync(filename, 'utf8')}
        })(module, module.exports, require)`;
    
    eval(wrappedSrc)
}

require = function (moduleName) {
    console.log(`${moduleName} was required`)

    const id = require.resolve(moduleName);
    if (require.cache[id]) {
        return require.cache[id].exports;
    }

    const module = {
        exports: {},
        id
    }

    require.cache[id] = module;

    loadModule(id, module, require)
    
    return module.exports;
}

require.cache = {};
require.resolve = (moduleName)=> {
    return originalRequire.resolve(moduleName);
}

require(process.argv[2])
