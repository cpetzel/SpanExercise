import {ORM} from 'redux-orm';
import {Device} from './devices/Device.model';

const schema = {Device};
type Schema = typeof schema;

// create ORM instance and register {Device ...} schema

const orm = new ORM<Schema>({
  stateSelector: state => state.orm,
});

orm.register(Device);

export default orm;
