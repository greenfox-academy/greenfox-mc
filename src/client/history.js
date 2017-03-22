'use strict';
import { createMemoryHistory } from 'react-router';

function Component() {
  const memoryHistory = createMemoryHistory()
  return {
    getHistory: () => memoryHistory,
    push: (path) => memoryHistory.push(path)
  }
}

Component.deps = [];
module.exports = Component;
