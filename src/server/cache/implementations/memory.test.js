/*global describe,beforeAll,expect,it */
"use strict";

import MemoryCache from './memory'

describe('cache-memory', function () {

	let memory;

	beforeAll(function () {
		memory = new MemoryCache();
	});

	it('should get null if cache is empty', async function () {
		const value = await memory.get('alwaysnull');
		expect(value).toBe(null);
	});

	it('should set value', async function () {
		const value = await memory.set('foo', 'bar');
		expect(value).toBe("bar");
	});

	it('should get value previously set', async function () {
		await memory.set('foo', 'bar');
		expect(await memory.get("foo")).toBe("bar");
	});

	it('should be able to increment by default value', async function () {
		await memory.set("qux", 1);
		await memory.increment("qux");
		const value = await memory.get("qux");
		expect(parseInt(value), 10).toBe(2);
	});

	it('should update pre-existing value with new value', async function () {
		await memory.set("foo", "bar");
		expect(await memory.get("foo")).toBe("bar");
		await memory.set("foo", "baz");
		expect(await memory.get("foo")).toBe("baz");
	});

	it('should be able to increment numeric values', async function () {
		await memory.set("qux", 1);
		await memory.increment("qux");
		const value = await memory.get("qux");
		expect(parseInt(value), 10).toBe(2);
	});

	it('should not be able to increment non-numeric values', async function () {
		await memory.set("foo", "bar");
		await memory.increment("foo")
		const value = await memory.increment("foo", 2);
		expect(value).toContain('foo is not a number');
	});
});
