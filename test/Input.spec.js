'use-strict'

const chai = require('chai')
const expect = chai.expect

describe('Input', function () {
    it('should be created', function () {
        const Input = require('../src/Input')
        const inputInstance = new Input()

        expect(inputInstance).to.not.be.undefined
    })

    it('get client type', function () {
        const Input = require('../src/Input')
        const inputInstance = new Input()
        const actual = 'Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)'
        const expected = 'Regular'

        expect(inputInstance.getClientType()).to.eq(expected)
    })
})