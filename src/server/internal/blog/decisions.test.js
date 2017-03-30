'use strict';

import {setBody} from './decisions';
import { expect } from 'chai';

describe('Decisions', () => {

  it('should change the body', () => {
    const post = {id: "test", body:"post"};
    expect(setBody(post).body).to.eql("post test");
  });

});
