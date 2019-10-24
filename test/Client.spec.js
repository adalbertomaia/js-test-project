'use-strict'

const chai = require('chai')
const expect = chai.expect

describe('Client', function(){
    it('should be created', function(){
        const Client = require('../src/Client')
        const clientInstance = new Client()

        expect(Client).to.not.be.undefined
    })
})