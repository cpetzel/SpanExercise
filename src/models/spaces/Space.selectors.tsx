import {createSelector} from 'redux-orm';

import orm, {Schema} from 'src/models/ORM';
import {OrmSession} from 'redux-orm/Session';
import {ormSelector} from 'src/selectors';

export const spaceSelector = createSelector(
  orm,
  ormSelector,
  (session: OrmSession<Schema>) => {
    return session.Space.all()
      .toModelArray()
      .map(space => {
        const {ref} = space;
        // Object.keys(ref) === ['id', 'name']

        return {
          ...ref,
          appliances: space.appliances
            .toRefArray()
            .map(appliance => appliance.name),
          tags: space.tags.toRefArray().map(tag => tag.name),
        };
      });
  },
);

export const tagsSelector = createSelector(
  orm,
  ormSelector,
  (session: OrmSession<Schema>) => {
    return session.Tag.all()
      .toModelArray()
      .map(tag => tag.name);
  },
);

export const applianceSelector = createSelector(
  orm,
  ormSelector,
  (session: OrmSession<Schema>) => {
    return session.Appliance.all()
      .toModelArray()
      .map(appliance => appliance.name);
  },
);
