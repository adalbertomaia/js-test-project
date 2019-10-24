'use-strict'

const chai = require('chai')
const expect = chai.expect

describe('Hotel', function () {
    it('should be created', function () {
        const Hotel = require('../src/Hotel.js')
        const hotelInstance = new Hotel()

        expect(hotelInstance).to.not.be.undefined
    })
})
