import _ from 'lodash';

'use strict';

function MemoryDatabase() {

    let db = [];

    function save(data) {
        db.push(data);
    }

    function queryByUrl(url) {
        return _.filter(db, 'url', url);
    }

    function reset() {
        db = [];
    }

    return Object.freeze({
        save,
        queryByUrl,
        reset
    })
}

module.exports = MemoryDatabase;
