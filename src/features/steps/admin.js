'use strict';

import { expect } from 'chai';
import { mount } from 'enzyme';

export default function() {
  this.Then('I get the incoming requests', function(callback) {
    const button = this.context.currentPage.find('#get-requests');
    button.simulate('click');
    callback();
  });

  this.Then('I see "$count" incoming request in the list', function(count, callback) {
    const list = this.context.currentPage.find('#requests-list');
    const unsubscribe = this.context.store.subscribe(checkList.bind(this));
    function checkList() {
      if (this.context.store.getState().requests.state === this.container.get('RequestActions').RECEIVE_REQUESTS) {
        expect(this.context.currentPage.find('.request').length).to.eql(parseInt(count));
        console.log(this.context.currentPage.find('.request').length);
        unsubscribe();
        callback();
      }
    }
  });

}
