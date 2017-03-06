function StatsCalculator(cache, store, queue) {
	function start () {
		queue.consume('stats', function (message) {
			switch (message) {
				case 'recalculateRequests':
					recalculateRequests();
					break;
				default:
					console.log('StatsCalculator: Unknown job name: ', message);
			}
		});
	}

	async function getRequests() {
		const request = await store.getSchema('Request');
		const result = await request.query(`query{request{url}}`);
		return result.data.request;
	}


	async function recalculateRequests() {
		await cache.flushAll();
		const requests = await getRequests();
		await Promise.all(
			requests.map(async () => {
				await cache.increment('totalIncomingRequests', 1);
			})
		);
	}

	return Object.freeze({
		start,
		recalculateRequests,
		getRequests
	});
}

StatsCalculator.deps = ['cache', 'store', 'queue'];

module.exports = StatsCalculator;