'use-strict'

const chai = require('chai')
const expect = chai.expect

describe('Hotel', function () {
    const Hotel = require('../src/Hotel')
    const hotelInstance = new Hotel()

    it('should find best hotel', function(){
        const expected = 'Lakewood'
        
        expect(hotelInstance.findBestHotel()).to.eql(expected)
    })

    it('get hotel database', function(){       
        const expected = require('../database/hotels.json')

        expect(hotelInstance.getHotelDatabase()).to.eql(expected)
        
    })
})
