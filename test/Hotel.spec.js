'use-strict'

const chai = require('chai')
const expect = chai.expect

describe('Hotel', function () {
    const Hotel = require('../src/Hotel')
    const hotelInstance = new Hotel()

    it('should find best hotel', function(){
        const expected = 'Lakewood'
        
        expect(hotelInstance.findBestHotel()).to.eq(expected)
    })

    it('get hotel database', function(){       
        const expected = require('../database/hotels.json')

        expect(hotelInstance.getHotelDatabase()).to.eql(expected)
    })

    it('get hotel index', function(){
        const lakewood = 'Lakewood'
        const bridgewood = 'Bridgewood'
        const ridgewood = 'Ridgewood'
        const expectedLakewood = 0
        const expectedBridgewood = 1
        const expectedRigdewood = 2

        expect(hotelInstance.getHotelIndex(lakewood)).to.eq(expectedLakewood)
        expect(hotelInstance.getHotelIndex(bridgewood)).to.eq(expectedBridgewood)
        expect(hotelInstance.getHotelIndex(ridgewood)).to.eq(expectedRigdewood)
    })

    it('get hotel week regular price', function(){
        const lakewood = 'Lakewwod'
        const clientType = 'Regular'
        const day = 'week'

        const expected = 110

        expect(hotelInstance.getHotelPrice(lakewood, clientType, day)).to.eq(expected)
    })
})
