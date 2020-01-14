var buf = Buffer.alloc(4);

buf.writeUInt8(0x63,0);
buf.writeUInt8(0x61,1);
buf.writeUInt8(0x74,2);
buf.writeUInt8(0x73,3);

console.log(buf.toString());

// demonstrating in-place modification of old buffer when changing new buffer
var buf1 = Buffer.from('this is the way we build our buffer')
var len = buf1.length;

var buf2 = buf1.slice(19, len);
console.log(buf2.toString());

buf2.fill('*', 0,5)
console.log(buf2.toString());

console.log(buf1.toString());
