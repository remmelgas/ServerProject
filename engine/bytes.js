const {
} = require('crypto');


let readerShift = NaN;
;exports.readerBytes = function(buffer) {
    readerShift = 0;
    this.buffer = buffer;
};
/**
 * @name getInt
 * @description extracts an integer
 * @return {Number}
 */
;exports.readerBytes.prototype.getInt = function() {
    let state = this.buffer.readInt32LE(readerShift);   
    readerShift = readerShift + 4;
    return state;
};

let writerShift = NaN;
;exports.writeBytes = function(sizeof) {
    writerShift = 0;
    this.buffer = Buffer.alloc(sizeof || 256);
};

/**
 * @name setInt
 * @argument {Number}
 * @description writes an integer to an array of bytes
 * @return {Number}
 */
;exports.writeBytes.prototype.setInt = function(value) {
    this.buffer.writeInt32LE(value, writerShift);
    writerShift = writerShift + 4;
    return value;
};


/**
 * @name setInt16
 * @argument {Number}
 * @description writes an integer16 to an array of bytes
 * @return {Number}
 */
;exports.writeBytes.prototype.setInt16 = function(value) {
    this.buffer.writeInt16LE(value, writerShift);
    writerShift = writerShift + 2;
    return value;
};

/**
 * @name setInt8
 * @argument {Number}
 * @description writes an integer8 to an array of bytes
 * @return {Number}
 */
;exports.writeBytes.prototype.setInt8 = function(value) {
    this.buffer.writeInt8(value, writerShift);
    writerShift = writerShift + 1;
    return value;
};

/**
 * @name setFloat
 * @argument {Number}
 * @description writes an float to an array of bytes
 * @return {Number}
 */
;exports.writeBytes.prototype.setInt = function(value) {
    this.buffer.writeFloatLE(value, writerShift);
    writerShift = writerShift + 4;
    return value;
};

/**
 * @name setDouble
 * @argument {Number}
 * @description writes an double to an array of bytes
 * @return {Number}
 */
;exports.writeBytes.prototype.setDouble = function(value) {
    this.buffer.writeDoubleLE(value, writerShift);
    writerShift = writerShift + 8;
    return value;
};

/**
 * @name setBytes
 * @argument {Buffer}
 * @description writes an bytes to an array of bytes
 * @return {Buffer}
 */
;exports.writeBytes.prototype.setBytes = function(value) {
    this.buffer.writeInt32LE(value, writerShift);
    writerShift = writerShift + 4;
    return value;
};