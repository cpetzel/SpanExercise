import {ORM} from 'redux-orm';
import {Appliance} from './appliance/Appliance.model';
import {Space} from './spaces/Space.model';
import {Tag} from './tags/Tag.model';

const schema = {Appliance, Space, Tag};
export type Schema = typeof schema;

// create ORM instance and register {Device ...} schema

const orm = new ORM<Schema>({
  stateSelector: state => state.orm,
});

orm.register(Space);
orm.register(Tag);
orm.register(Appliance);

export default orm;
