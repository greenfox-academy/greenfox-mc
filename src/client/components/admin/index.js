'use strict';

import React from 'react';
import { connect } from 'react-redux'

function Component(Request) {
  class Admin extends React.Component {
    render() {
      const RequestList = (requests) => {
        return requests.map((request, index) => {
          return (
            <div key={index} className="request">
              {request.url}
            </div>
          )
        })
      }
      const list = RequestList(this.props.requests.items);
      return (
        <div>
          <button id="get-requests" type="button" onClick={async ()=>{
            await this.props.getRequests()
          }}>
            Get Incoming Requests
          </button>
          <div>
            {list}
          </div>
        </div>
      );
    }
  }

  const State = ({requests}) => ({ requests });
  const Operations = dispatch => ({
    getRequests: () => {
      dispatch(Request.getRequests());
    }
  });

  return connect(State, Operations)(Admin);
}

Component.deps = ['RequestActions'];
module.exports = Component;
