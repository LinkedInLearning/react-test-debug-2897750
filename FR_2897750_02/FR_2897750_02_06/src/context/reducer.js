
const ADD_ITEM = "ADD_ITEM";
const CHECK_ITEM = "CHECK_ITEM";
const REMOVE_ITEMS = "REMOVE_ITEMS";


export const initialState = {
  items: [
    { id: 123, value: "item #1", done: false },
    { id: 124, value: "item #2", done: false },
  ],
};

function uid() {
  return Math.floor(Math.random() * 900);
}
function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_ITEM:
      return {
        items: [...state.items, {id: uid(), value: payload.value, done: false}],
      };

    case CHECK_ITEM:
      function check(item) {
        return item.id === payload.id
          ? { ...item, done: !item.done }
          : item;
      }
      return {
        items: state.items.map(check),
      };
    case REMOVE_ITEMS:
      function remove(item) { return !item.done}
      return {
        items: state.items.filter(remove),
      };
    default:
      return state;
  }
}

export default reducer;
