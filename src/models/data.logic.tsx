import {createLogic} from 'redux-logic';
import {DATA} from './appliance/Appliance.actions';

const logTag = '[data.logic]';

const fetchDataLogic = createLogic({
  type: DATA.API.FETCH,
  debounce: 500,
  // warnTimeout: 0, // long running logic
  process: async () => {
    // use the adhoc stream, so the 10 second timer will reset when this refresh is kicke doff
    console.log(`${logTag} - Map changed. Will refresh fleet with logic`);
    //refreshVehicleAdhoc$.next('');
  },
});

export default [fetchDataLogic];
