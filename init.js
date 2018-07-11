const {
    session,
    initsock
} = require('./engine/enet');

const {
    writeBytes,
    readerBytes
} = require('./engine/bytes');

class test extends session {
    constructor() {
        super(arguments);
    }

    message(dataState) {
        console.log(dataState);
    }
}

async function Start() {
    const socket = new initsock({
        host: '127.0.0.1',
        port: 3303
    });
    
    socket.setclass(test);
    socket.listen();



    return 'Running...';
};


Start().then(console.log).catch(console.error);