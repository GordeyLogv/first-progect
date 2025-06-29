const path = require('path');
const fs = require('fs/promises');

const findById = (list, id) => {
    return  list.find(list => String(list.id) === String(id))
}

module.exports = findById;