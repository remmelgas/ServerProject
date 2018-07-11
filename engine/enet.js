const {
    createServer
} = require('net');

/**
 * class of primary socket processing
 */

;exports.session = function(socket) {
    this.socket = socket;
}

;exports.session.prototype.message = function(dataState) {
    
}

;exports.session.prototype.disconnect = function(errorState) {

}

;exports.session.prototype.error = function(errorState) {

}

 /**
 * Initialize and configure the socket 
 */
var sockstate,
    sessionstate = null;

;exports.initsock = function(params) {
    sockstate = createServer(params, sockmng);
};

;exports.initsock.prototype.setclass = function(classObject) {
    sessionstate = classObject;
};

;exports.initsock.prototype.listen = function() {
    sockstate.listen(3303);

    return sockstate;
};


const sockmng = function(socket) {
    let sessionState = new sessionstate(socket);

    socket.on('data', sessionState.message);
    socket.on('error', sessionState.error);
    socket.on('close', sessionState.disconnect);
};