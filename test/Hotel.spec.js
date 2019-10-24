'use-strict'

const chai = require('chai')
const expect = chai.expect

describe('Hotel', function () {
    it('should find best hotel', function(){
        const Hotel = require('../src/Hotel')
        const hotelInstance = new Hotel()
        const expected = 'Lakewood'
        
        expect(hotelInstance.findBestHotel()).to.eql(expected)
    })
})
