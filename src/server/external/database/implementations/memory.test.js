'use strict';

import MemoryDatabase from './memory';
import { expect } from 'chai';

describe('Memory database', () => {

    const db = MemoryDatabase();
    it('should add item to the db', () => {
        const result = db.save({
            url: '/hello',
            body: 'request body is coming here'
        })
        expect(result.length).to.eql(1);
    });

    it('should throw error for bad values', () => {
        const result = db.save({
            url: '/hello',
            body: true
        })
        expect(result).to.throw(/You have to use/);
    });

    it('should throw error for bad key', () => {
        const result = db.save({
            url: 0,
            body: 'request body is coming here'
        })
        expect(result).to.throw(/You have to use/);
    });

    it('should return item by key', () => {
        const result = db.save({
            url: '/hello',
            body: 'request body is coming here'
        })
        expect(result[0].url).to.eql('/hello');
        expect(result[0].body).to.eql('request body is coming here');
    });

});
