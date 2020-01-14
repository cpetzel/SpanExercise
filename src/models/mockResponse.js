export default {
  tags: [
    {id: 1, name: 'Basic'},
    {id: 2, name: 'Ground'},
    {id: 3, name: 'Upstairs'},
    {id: 4, name: 'Downstairs'},
  ],

  appliances: [
    {id: 1, name: 'microwave'},
    {id: 2, name: 'fridge'},
    {id: 3, name: 'heater'},
    {id: 4, name: 'pump'},
    {id: 5, name: 'washer'},
    {id: 6, name: 'dryer'},
    {id: 7, name: 'lights'},
    {id: 8, name: 'zapper'},
    {id: 9, name: 'lights'},
  ],

  spaces: [
    {
      id: 1,
      name: 'Kitchen',
      tags: [1, 2],
      state: 'active',
      usage: {
        kw: 200,
      },
      history: {},
      appliances: [1, 2],
    },
    {
      id: 2,
      name: 'Basement',
      tags: [4],
      state: 'idle',
      usage: {
        kw: 50,
      },
      history: {},
      appliances: [3, 4],
    },
    {
      id: 3,
      name: 'Laundry',
      tags: [1, 2],
      state: 'active',
      usage: {
        kw: 500,
      },
      history: {},
      appliances: [5, 6],
    },
    {
      id: 4,
      name: 'Patio',
      tags: [2],
      state: 'active',
      usage: {
        kw: 100,
      },
      history: {},
      appliances: [7, 8],
    },
    {
      id: 5,
      name: 'Attic',
      tags: [3],
      state: 'off',
      usage: {
        kw: 10,
      },
      history: {},
      appliances: [9],
    },
  ],
};
