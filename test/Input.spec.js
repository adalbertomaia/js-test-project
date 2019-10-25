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

    it('get day quantity by type', function(){
        const actual = 'Regular: 16Mar2009(mon), 17Mar2009(tues), 28Mar2009(sat)'
        const expected = {"week": 2, "weekend": 1 }

        expect(inputInstance.getDayQuantityByType(actual)).to.eql(expected)
    })

    it('check its weekend day', function(){
        const weekend = "28Mar2009(sat)"
        const weekday = "16Mar2009(mon)"
        
        expect(inputInstance.itsWeekend(weekend)).to.be.true
        expect(inputInstance.itsWeekend(weekday)).to.be.false
    })
})