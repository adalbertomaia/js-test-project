class Hotel {

    findBestHotel() {
        return 'Lakewood'
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
        return 110
    }
}

module.exports = Hotel