class Hotel {

    findBestHotel(input) {
        const Input = require('../src/Input')
        const inputInstance = new Input()
        const lakewood = 'Lakewood'
        const bridgewood = 'Bridgewood'
        const ridgewood = 'Ridgewood'

        const clientType = inputInstance.getClientType(input)
        const day = inputInstance.getDayQuantityByType(input)

        this.getSumHotelPrice(lakewood, day, clientType)

        if (this.getSumHotelPrice(ridgewood, day, clientType) <=
            this.getSumHotelPrice(bridgewood, day, clientType)) {
            return ridgewood
        } else if (this.getSumHotelPrice(bridgewood, day, clientType) <=
            this.getSumHotelPrice(lakewood, day, clientType)) {
            return bridgewood
        } else {
            return lakewood
        }
    }

    getHotelDatabase() {
        return require('../database/hotels.json')
    }

    getHotelIndex(hotel) {
        if (hotel === 'Lakewood') {
            return 0
        } else if (hotel === 'Bridgewood') {
            return 1
        } else {
            return 2
        }
    }

    getHotelPrice(hotel, clientType, day) {
        const hotelIndex = this.getHotelIndex(hotel)
        const hotelDatabase = this.getHotelDatabase()

        return hotelDatabase.hotels[hotelIndex].prices[clientType][day]
    }

    getSumHotelPrice(hotel, day, clientType) {
        const week = 'week'
        const weekend = 'weekend'
        let sum = this.getHotelPrice(hotel, clientType, week) * day.week +
            this.getHotelPrice(hotel, clientType, weekend) * day.weekend

        return sum
    }
}

module.exports = Hotel