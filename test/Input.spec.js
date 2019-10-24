'use-strict'

const chai = require('chai')
const expect = chai.expect

describe('Input', function(){
    it('should be created', function(){
        const Input = require('../src/Input')
        const inputInstance = new Input()

        expect(inputInstance).to.not.be.undefined
    })
})