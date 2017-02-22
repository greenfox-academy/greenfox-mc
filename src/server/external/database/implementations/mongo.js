const mongoose = require('mongoose');
const mockgoose = require('mockgoose')
mongoose.Promise = global.Promise;

mockgoose(mongoose).then(function () {
    mongoose.connect('mongodb://localhost/test');
})

'use strict';

function MongoDatabase() {

    const RequestSchema = new mongoose.Schema({
        url: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        }
    })

    const RequestModel = mongoose.model('Request', RequestSchema);

    async function save(data) {
        let model = new RequestModel({
            url: data.url,
            body: data.body
        })
        let result = await model.save();
        return RequestModel.find({ _id: result._id })
    }

    async function query(query) {
        return await RequestModel.find(query).exec()
    }

    function queryByUrl(url) {
        return this.query(url)
    }

    function queryAll() {
        return this.query({})
    }

    async function reset() {
        RequestModel.remove({}, function () {
            console.log('collection removed')
        });
    }

    return Object.freeze({
        save,
        query,
        queryByUrl,
        queryAll,
        reset
    })
}

module.exports = MongoDatabase;
