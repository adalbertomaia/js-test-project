class Hotel {

    findBestHotel() {
        return "Lakewood"
    } 

    getHotelDatabase() {
        return require('../database/hotels.json')
    }
}

module.exports = Hotel