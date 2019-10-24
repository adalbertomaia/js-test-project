'use-strict'

const chai = require('chai')
const expect = chai.expect

describe('Input', function () {

    const Input = require('../src/Input')
    const inputInstance = new Input()

    it('get client type regular', function () {
        
        const actual = 'Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)'
        const expected = 'Regular'

        expect(inputInstance.getClientType(actual)).to.eq(expected)
    })

    it('get client type reward', function(){

        const actual = 'Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)'
        const expected = 'Rewards'

        expect(inputInstance.getClientType(actual)).to.eq(expected)

    })
})