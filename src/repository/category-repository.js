'use strict';
const mongoose = require('mongoose');
const Category = mongoose.model('Category');

exports.get = (req, res, next) => {
    return Category
        .find({}, 'nome');
}
