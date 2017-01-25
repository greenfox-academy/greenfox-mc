/*global describe,beforeAll,afterAll,expect,it */
"use strict";

import RedisCache from './redis'

describe('cache-redis', function () {

    let redis;

    beforeAll(function () {
        redis = new RedisCache();
    });

    afterAll(async function () {
        redis.cache.flushdb();
    });

    it('should get null if cache is empty', async function () {
        const value = await redis.get('foo');
        expect(value).toBe(null);
    });

    it('should set value', async function () {
        const value = await redis.set('foo', 'bar');
        expect(value).toBe("bar");
    });

    // not sure we should do this! each step should be independent
    it('should get value previously set', async function () {
        const value = await redis.get('foo');
        expect(value).toBe("bar");
    });

    it('should update pre-existing value with new value', async function () {
        await redis.set("foo", "bar");
        await redis.set("foo", "baz");
        const value = await redis.get("foo");
        expect(value).toBe("baz");
    });

    it('should be able to increment by default value', async function () {
        await redis.set("qux", 1);
        await redis.increment("qux");
        const value = await redis.get("qux");
        expect(parseInt(value), 10).toBe(2);
    });

    it('should be able to increment explicit values', async function () {
        await redis.set("qux", 1);
        await redis.increment("qux", 2);
        const value = await redis.get("qux");
        expect(parseInt(value), 10).toBe(3);
    });

    it('should not be able to increment non-numeric values', async function () {
        await redis.set("foo", "bar");
        const value = await redis.increment("foo", 2)
        expect(value).toContain('value is not an integer or out of range');
    });
});
