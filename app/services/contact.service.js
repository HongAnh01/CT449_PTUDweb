const { ObjectId } = require("mongodb");

class ContactService {
    constructor(client) {
        this.Contact = client.db().collection("Contacts");
    }
}

module.exports = ContactService;