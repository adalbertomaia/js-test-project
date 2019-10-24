class Input {

    getClientType(client) {
        return client.split(':')[0]
    }

}

module.exports = Input