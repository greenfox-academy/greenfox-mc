import _ from 'lodash';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

'use strict';

function MongoDatabase() {

    mongoose.connect('mongodb://localhost/test');
    const RequestSchema = mongoose.Schema({
        url: String,
        requestData: String
    })

    const RequestModel = mongoose.model('Request', RequestSchema);

    async function save(data) {
        let request = new RequestModel({
            url: data.urL,
            requestData: data.requestData
        })
        return request.save();
    }

    async function queryByUrl(url) {
        return await RequestModel.find({ url: url }).exec()
    }

    async function reset() {
        RequestModel.remove({}, function (err) {
            console.log('collection removed')
        });
    }

    return Object.freeze({
        save,
        queryByUrl,
        reset
    })
}

module.exports = MongoDatabase;
