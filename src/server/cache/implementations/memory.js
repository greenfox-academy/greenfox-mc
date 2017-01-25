import { isNumber } from 'lodash'

class MemoryCache {
    constructor() {
        this.cache = {};
    }

    async get(key) {
        const exists = this.cache.hasOwnProperty(key);
        return exists ? this.cache[key] : null;
    }

    async set(key, value) {
        this.cache[key] = value;
        return value;
    }

    async increment(key, amount = 1) {
        const value = (await this.get(key)) || 0;
        if (!isNumber(value)) {
            return `${key} is not a number`;
        }
        const newValue = value + amount;
        await this.set(key, newValue);
        return newValue;
    }
}

module.exports = MemoryCache;
