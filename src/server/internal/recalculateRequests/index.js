const recalculateRequests = function (cache, store) {
		return async function () {
			const requestSchema = await store.getSchema('Request');
			const results = await requestSchema.query(`query{request{ url }}`);
			cache.set('totalIncomingRequests', results.data.request.length);
		}
}



recalculateRequests.deps = ['cache', 'store'];

module.exports = recalculateRequests;
