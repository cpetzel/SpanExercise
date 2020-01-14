import {ITag} from '../tags/Tag.model';
import {IAppliance} from './Appliance.model';
import {ISpace} from '../spaces/Space.model';

export const DATA = {
  UPDATE: 'DATA.UPDATE',
  SET: 'DATA.SET_DEVICES',
  API: {
    FETCH: 'DATA.API.FETCH',
    CANCEL: 'DATA.API.CANCEL',
  },
  POLLING: {
    START: 'DATA.POLLING.START',
    STOP: 'DATA.POLLING.STOP',
  },
};

// export type SetDevicesActionPayload = DeviceFields[];

export interface SetDataAction {
  type: typeof DATA.SET;
  payload: DataResponse;
}

export interface SetDataActionPayload {
  id: string;
  name: string;
}

export type DeviceActions = SetDataAction | any;

export interface DataResponse {
  tags: ITag[];
  appliances: IAppliance[];
  spaces: ISpace[];
}

export const setData = (data: DataResponse): SetDataAction => ({
  type: DATA.SET,
  payload: data,
});
