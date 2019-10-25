'use-strict'

const chai = require('chai')
const expect = chai.expect

describe('Hotel', function () {
    const Hotel = require('../src/Hotel')
    const hotelInstance = new Hotel()
    const clientRegular = 'Regular'
    const lakewood = 'Lakewood'
    const bridgewood = 'Bridgewood'
    const ridgewood = 'Ridgewood'

    it('should find best hotel', function(){
        const expected = 'Lakewood'
        
        expect(hotelInstance.findBestHotel()).to.eq(expected)
    })

    it('get hotel database', function(){       
        const expected = require('../database/hotels.json')

        expect(hotelInstance.getHotelDatabase()).to.eql(expected)
    })

    it('get hotel index', function(){
        const expectedLakewood = 0
        const expectedBridgewood = 1
        const expectedRigdewood = 2

        expect(hotelInstance.getHotelIndex(lakewood)).to.eq(expectedLakewood)
        expect(hotelInstance.getHotelIndex(bridgewood)).to.eq(expectedBridgewood)
        expect(hotelInstance.getHotelIndex(ridgewood)).to.eq(expectedRigdewood)
    })

    it('get hotel week regular price', function(){
        const day = 'week'

        const expectedLakewood = 110
        const expectedBridgewood = 160
        const expectedRigdewood = 220

        expect(hotelInstance.getHotelPrice(lakewood, clientRegular, day)).to.eq(expectedLakewood)
        expect(hotelInstance.getHotelPrice(bridgewood, clientRegular, day)).to.eq(expectedBridgewood)
        expect(hotelInstance.getHotelPrice(ridgewood, clientRegular, day)).to.eq(expectedRigdewood)
    })

    it('get sum hotel price for week and weekend', function(){
        const expected = 200
        const day = {"week": 1, "weekend": 1}

        expect(hotelInstance.getSumHotelPrice(lakewood, day, clientRegular)).to.eq(expected)
    })
})
