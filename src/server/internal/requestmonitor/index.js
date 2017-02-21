
function RequestMonitor(cache, store) {

    const RequestSchema = store.getSchema('Request');

    async function registerIncomingRequest(url, params) {
        await cache.increment('totalIncomingRequests', 1);
        await RequestSchema.save(url, params);
    }

    async function getStatistics() {
        return {
            totalIncomingRequests: await cache.get('totalIncomingRequests')
        }
    }

    async function getAllRequests() {
        return await RequestSchema.getAll()
    }

    return Object.freeze({
        registerIncomingRequest,
        getStatistics,
        getAllRequests
    });
}

RequestMonitor.deps = ['cache', 'store'];

module.exports = RequestMonitor;
