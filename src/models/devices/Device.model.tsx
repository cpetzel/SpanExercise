import {Model, attr, ModelType} from 'redux-orm';
import {
  DeviceActions,
  DEVICES,
  SetDevicesActionPayload,
  UpdateDeviceActionPayload,
} from './Device.actions';

//https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/redux-orm/redux-orm-tests.ts
export interface DeviceFields {
  id: number;
  name: string;
}

export class Device extends Model<typeof Device, DeviceFields> {
  static reducer(action: DeviceActions, Device: ModelType<Device>) {
    switch (action.type) {
      case DEVICES.UPDATE:
        // Device.upsert(action.payload);
        break;
      case DEVICES.SET_DEVICES:
        const devices = action.payload as SetDevicesActionPayload;
        // TODO enhance
        Device.all().delete();
        devices.forEach(device => {
          console.log(`craig adding ${JSON.stringify(device)}`);
          Device.create(device);
        });
        break;
      default:
        break;
    }
  }

  static modelName = 'Device' as const;

  static fields = {
    id: attr(),
    name: attr({getDefault: () => 'empty.png'}),
    // publisher: fk('Publisher', 'books'),
    // authors: many({ to: 'Person', relatedName: 'books', through: 'Authorship' })
  };
  /*  static options = {
        idAttribute: 'title' as const
    }; */
}
