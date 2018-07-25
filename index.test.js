var assert = require('chai');
var should = require('chai').should();
var index = require('./index');
var index2 = require('./index2');


describe('test', function() {

    it('1', function(){
        index.add(2, 3).should.equal(5);
    });

    it('2', function(){
        index.sub(2, 3).should.equal(-4);
    });

    it('3', function(){
        index2.ab().should.equal('ab');
    });

    it('4', function(){
        index2.xy().should.be.a('string')
    })

});