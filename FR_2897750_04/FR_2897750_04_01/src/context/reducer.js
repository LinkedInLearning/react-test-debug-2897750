
const ADD_ITEM = "ADD_ITEM";
const CHECK_ITEM = "CHECK_ITEM";
const REMOVE_ITEMS = "REMOVE_ITEMS";


export const initialState = {
  items: [
    {id: 121, value: 'item #1', done:false}
  ],
};

function uid() {
  return Math.floor(Math.random() * 900);
}
function reducer(state = initialState, { type, payload }) {
  function check(item) {
    return item.id === payload.id
      ? { ...item, done: !item.done }
      : item;
  }
  function remove(item) { return !item.done}
  switch (type) {
    case ADD_ITEM:
      debugger
      return {
        items: [...state.items, {id: uid(), value: payload, done: false}],
      };

    case CHECK_ITEM:
      return {
        items: state.items.map(check),
      };
    case REMOVE_ITEMS:

      return {
        items: state.items.filter(remove),
      };
    default:
      return state;
  }
}

export default reducer;
