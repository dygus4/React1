import shortid from 'shortid';

// selectors
//export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);
export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);


// action name creator
//const reducerName = 'columns';
//const createActionName = name => `app/${reducerName}/${name}`;

const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
//export const ADD_COLUMN = createActionName('ADD_COLUMN');

export const ADD_CARD = createActionName('ADD_CARD');


// action creators
//export const createActionAddColumn = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_COLUMN });

export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}