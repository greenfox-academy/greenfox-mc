import container from './container';
import VError from 'verror';

const stats = container.get('stats');

stats.recalculate().then(()=>{
  console.log('recalculation was successful');
}).catch((error)=>{
  console.log(new VError(error, `[Recalcuate] The recalcuation was unsuccessful`));
});
