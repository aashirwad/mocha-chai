var m = require('./index2');

function add(x, y){
    return x + y;
}

function sub(x, y){
    return m.multi(x,y)-10;
}

module.exports = {
    add, 
    sub
}