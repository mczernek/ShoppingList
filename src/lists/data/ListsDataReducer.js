import loadList from './ListsData';

const initialState = {
  lists: {},
};

export default function reduce(state = initialState, action = {}) {
  let newState;
  switch (action.type) {
    case loadList.type:
      newState = {
        ...state,
        lists: [
          {
            id: 1,
            name: 'Sobota',
          },
          {
            id: 2,
            name: 'Impreza',
          },
          {
            id: 3,
            name: 'Detergenty',
          },
          {
            id: 4,
            name: 'Ubrania',
          },
        ],
      };
      break;
    default:
      newState = {
        ...state,
      };
      break;
  }
  return newState || state;
}
