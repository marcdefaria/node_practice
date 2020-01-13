// creates a new buffer and fills it with zeros
'use strict';
let a = [1,2,3];
let b = Buffer.from(a);
console.log(b);
let a2 = new Uint8Array([1,2,3]);
let b2 = Buffer.from(a2);
console.log(b2);
let b3 = Buffer.alloc(10);
console.log(b3);
let b4 = Buffer.allocUnsafe(10);
console.log(b4);

// example going from string to json to buffer
let buf = Buffer.from('This is my pretty example');
let json = JSON.stringify(buf);
let buf2 = Buffer.from(JSON.parse(json).data)

console.log(buf.toString('utf8', 11,17));


let StringDecoder = require('string_decoder').StringDecoder;
let decoder = new StringDecoder('utf-8');
let euro = Buffer.from([0xE2, 0x82]);
let euro2 = Buffer.from([0xAC]);
console.log(decoder.write(euro));
console.log(decoder.write(euro2));

console.log(euro.toString());
console.log(euro2.toString());

let buf5 = Buffer.alloc(3);
buf5.write('£', 'utf-8');

console.log(buf5.length)
