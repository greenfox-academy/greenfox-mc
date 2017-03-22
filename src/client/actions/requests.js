function RequestAction(requestmonitor) {

  const REQUEST_REQUESTS = 'REQUEST_REQUESTS';
  const RECEIVE_REQUESTS = 'RECEIVE_REQUESTS';

  const receiveRequests = (requests) => ({
    type: RECEIVE_REQUESTS,
    requests
  });

  const getRequests = () => async (dispatch) => {
    const requests = await requestmonitor.getRequests(requests);
    dispatch(receiveRequests(requests));
  }

  return Object.freeze({
    RECEIVE_REQUESTS,
    REQUEST_REQUESTS,
    getRequests
  });

}

RequestAction.deps = ['requestmonitor'];
module.exports = RequestAction;
