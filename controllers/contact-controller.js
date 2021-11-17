const Contacts = require('../models/contacts')
const createPath = require('../helpers/create-path');


const getContacts = ((req, res, next) => {

    const title = 'Contacts';
    Contacts
        .find()
        .then((contacts) => res.render(createPath('contacts'), {contacts, title}))
        .catch((err) => {
            console.error(err);
            res.send(createPath('error'), {title: "Error"});
        })
})

module.exports = {
    getContacts
}