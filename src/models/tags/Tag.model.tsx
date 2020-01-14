import {Model, attr, ModelType} from 'redux-orm';

//https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/redux-orm/redux-orm-tests.ts
export interface ITag {
  id: number;
  name: string;
}

export class Tag extends Model<typeof Tag, ITag> {
  static modelName = 'Tag' as const;

  static fields = {
    id: attr(),
    name: attr(),
  };
}
