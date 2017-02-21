import _ from 'lodash';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

'use strict';

function MongoDatabase() {

    mongoose.connect('mongodb://localhost/test');

    let RequestSchema = new mongoose.Schema({
        url: String,
        body: String
    })

    let RequestModel = mongoose.model('Request', RequestSchema);

    async function save(data) {
        let request = new RequestModel({
            url: data.url,
            body: data.body
        })
        return request.save();
    }

    async function queryByUrl(url) {
        return await RequestModel.find({ url: url }).exec()
    }

    async function queryAll() {
        return await RequestModel.find().exec()
    }

    async function reset() {
        RequestModel.remove({}, function (err) {
            console.log('collection removed')
        });
    }

    return Object.freeze({
        save,
        queryByUrl,
        queryAll,
        reset
    })
}

module.exports = MongoDatabase;
