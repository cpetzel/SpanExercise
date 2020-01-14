import {Model, attr, ModelType, fk, many} from 'redux-orm';
import {IAppliance} from '../appliance/Appliance.model';

export enum STATE {
  'off',
  'idle',
  'active',
}

type State = STATE.active | STATE.idle | STATE.off;

//https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/redux-orm/redux-orm-tests.ts
export interface ISpace {
  id: number;
  name: string;
  tags: number[];
  state: State;
  history: any;
  appliances: IAppliance[];
}

export class Space extends Model<typeof Space, ISpace> {
  /* static reducer(action: SetDataAction, Space: ModelType<Space>) {
    switch (action.type) {
      case DATA.SET:
        const data = action.payload as DataResponse;
        data.spaces.forEach(space => {
          console.log(`craig adding space ${JSON.stringify(space)}`);
          Space.create(space);
        });
        break;
      default:
        break;
    }
  } */

  static modelName = 'Space' as const;
  static backend = 'name' as const;

  static fields = {
    name: attr(),
    tags: many('Tag', 'spaces'),
    state: attr(),
    appliances: many('Appliance', 'spaces'),
    // means that accessing the 'spaces' property of a Tag model instance,
    // returns the set of spaces that have that tag
  };
}
