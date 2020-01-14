import {DeviceFields} from './Device.model';

export const DEVICES = {
  UPDATE: 'DEVICES.UPDATE',
  SET_DEVICES: 'DEVICES.SET_DEVICES',
  API: {
    FETCH: 'DEVICES.API.FETCH',
    CANCEL: 'DEVICES.API.CANCEL',
  },
  POLLING: {
    START: 'DEVICES.POLLING.START',
    STOP: 'DEVICES.POLLING.STOP',
  },
};

export type SetDevicesActionPayload = DeviceFields[];

export interface SetDevicesAction {
  type: typeof DEVICES.SET_DEVICES;
  payload: SetDevicesActionPayload;
}

export interface UpdateDeviceActionPayload {
  id: string;
  name: string;
}
interface UpdateDeviceAction {
  type: typeof DEVICES.UPDATE;
  payload: UpdateDeviceActionPayload;
}

export type DeviceActions = SetDevicesAction | UpdateDeviceAction;

export const setDevices = (devices: DeviceFields[]): SetDevicesAction => ({
  type: DEVICES.SET_DEVICES,
  payload: devices,
});
