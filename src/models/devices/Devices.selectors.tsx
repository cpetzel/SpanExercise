import {createSelector} from 'redux-orm';

import orm from '../ORM';

export const devices = createSelector(orm.Device);
