import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

function Reducers(container) {

  const RequestActions = container.get('RequestActions');

  const requests = (state = {items:[]}, action) => {
    switch (action.type) {
      case RequestActions.RECEIVE_REQUESTS:
        return {
          ...state,
          items: action.requests,
          state: RequestActions.RECEIVE_REQUESTS
        }
      default:
        return state
    }
  }

  const rootReducer = combineReducers({
    requests,
    routing: routerReducer,
    form: formReducer
  });

  return rootReducer;
}

Reducers.type = 'factory';
module.exports = Reducers;
