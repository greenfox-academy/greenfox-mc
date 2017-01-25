const Redis = require('ioredis');

const port = process.env.npm_package_config_redis_port
const path = process.env.npm_package_config_redis_path

class RedisCache {
    constructor() {
        this.cache = new Redis(port, path, {
            showFriendlyErrorStack: true
        });
    }

    async get(key) {
        return this.cache.get(key);
    }

    async set(key, value) {
        return this.cache.set(key, value).then(function (result) {
            if (result === 'OK') {
                return value;
            }
        });
    }

    async increment(key, amount = 1) {
        try {
            return await this.cache.incrby(key, amount);
        } catch (e) {
            return `${e}`
        }
    }

}

module.exports = RedisCache;
