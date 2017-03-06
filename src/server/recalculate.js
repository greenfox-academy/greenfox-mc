import container from './container';
import VError from 'verror';

const statsCalculator = container.get('statscalculator');
const requestMonitor = container.get('requestmonitor');

async function recalculate() {
  await statsCalculator.recalculateRequests();
  console.log(await requestMonitor.getStatistics());
}

recalculate().then(()=>{
  console.log('recalculation was successful');
}).catch((error)=>{
  console.log(new VError(error, `[Recalcuate] The recalcuation was unsuccessful`));
});
