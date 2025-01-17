require('./Logger').customMessage = function() {
    console.log('This is a custom message from monkey patching');
}