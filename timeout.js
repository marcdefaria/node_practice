
var timer1 = setTimeout(function(name) {
    console.log('hello ' + name);
}, 3000, 'Sally');

console.log('Waiting on timer ...');

setTimeout(function(timer) {
    clearTimeout(timer);
    console.log('cleared timer');
}, 3000, timer1);
