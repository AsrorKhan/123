const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const contactsSchema = new Schema({
    name: {
        type: 'string',
        required: true
    },
    link: {
        type: 'string',
        required: true
    },
})


const Contacts = mongoose.model('Contacts', contactsSchema);

module.exports = Contacts;