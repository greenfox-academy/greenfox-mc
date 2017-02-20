import _ from 'lodash';
import validate from '../../../lib/validate';
import VError from 'verror';

'use strict';

function MemoryDatabase() {

    let db = [];

    function save(data) {
        validate.string(
            data.url,
            new VError(`[DB] You have to use string as a key, got "${data.url}" (${typeof data.url})`)
        );
        validate.string(
            data.body,
            new VError(
                `[DB] You have to use string as a body, got "${data.body}" (${typeof data.body})`
            )
        );
        db.push(data);
        return this.queryByUrl(data.url);
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
