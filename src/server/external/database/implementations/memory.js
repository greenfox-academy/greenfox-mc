'use strict';

function MemoryDatabase() {
    save() {

    },

    queryByUrl(url) {

    },
    
    reset() {

    }

    return Object.freeze({
        save,
        queryByUrl,
        reset   
    })
}

module.exports = MemoryDatabase;
