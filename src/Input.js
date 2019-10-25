class Input {

    getClientType(client) {
        return client.split(':')[0]
    }

    getDayQuantityByType(input) {
        input = input.split(": ")[1].split(",")
        let day = { "week": 0, "weekend": 0 }

        for (let dayInput in input) {
            
            if (this.itsWeekend(input[dayInput])) {
                day.weekend++
            } else {
                day.week++
            }
        }

        return day
    }

    itsWeekend(day) {
        let regExp = /\(([^)]+)\)/;
        let weekday = regExp.exec(day)[1]
        return (weekday === 'sat') || (weekday === 'sun')
    }

}

module.exports = Input