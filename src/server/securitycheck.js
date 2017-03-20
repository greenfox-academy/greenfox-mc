import container from './container';
import VError from 'verror';

const queue = container.get('queue');
const securityCheck = container.get('security');

queue.consume('securitycheck', securityCheck.processMessage).then(()=>{
  console.log('starting consuming the secuirtycheck was successful');
}).catch((error)=>{
  console.log(new VError(error, `[Secuirty] consuming the securitycheck was unsucessful`));
});
