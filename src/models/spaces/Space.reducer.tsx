import spanOrm from 'src/models/ORM';

import {DATA, DataResponse} from 'src/models/appliance/Appliance.actions';

export const dataReducer = (dbState, action) => {
  const session = spanOrm.session(dbState || spanOrm.getEmptyState());

  if (!action) return session.state;

  switch (action.type) {
    case DATA.SET:
      const newSession = spanOrm.session(spanOrm.getEmptyState());
      const {Space, Tag, Appliance} = newSession;

      const data = action.payload as DataResponse;
      Space.all().delete();
      Tag.all().delete();
      Appliance.all().delete();

      //first create the tags
      data.tags.forEach(tag => {
        console.log(`craig adding tag ${JSON.stringify(tag)}`);
        Tag.create(tag);
      });

      // then create the appliances
      data.appliances.forEach(appliance => {
        console.log(`craig adding appliance ${JSON.stringify(appliance)}`);

        Appliance.create(appliance);
      });

      // then tie them together
      data.spaces.forEach(space => {
        console.log(`craig adding space ${JSON.stringify(space)}`);

        Space.create(space);
      });

      return newSession.state;
  }
  return session.state;
};
