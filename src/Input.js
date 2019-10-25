class Input {

    getClientType(client) {
        return client.split(':')[0]
    }

    getDayQuantityByType(input) {
        input = input.split(": ")[1].split(",")
        let day = { "week": 0, "weekend": 0 }
        let regExp = /\(([^)]+)\)/;
        let weekday = ''

        for (let dayInput in input) {
            weekday = regExp.exec(input[dayInput])[1]
            
            if ((weekday === 'sat') ||
                (weekday === 'sun')) {

                day.weekend++
            } else {
                day.week++
            }
        }

        return day
    }

}

module.exports = Input