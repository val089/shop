const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const ADJUST_QTY = 'ADJUST_QTY';

export const addToCart = itemID => ({
  type: ADD_TO_CART,
  payload: {
    id: itemID
  }
});

export const removeFromCart = itemID => ({
  type: REMOVE_FROM_CART,
  payload: {
    id: itemID
  }
});

export const adjustQty = (itemID, value) => ({
  type: ADJUST_QTY,
  payload: {
    id: itemID,
    qty: value
  }
});

const INITIAL_STATE = {
  cart: []
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const item = state.books.find(
          (book) => book.id === action.payload.id
        );
        const inCart = state.cart.find((item) =>
          item.id === action.payload.id ? true : false
        );
        return {
          ...state,
          cart: inCart
            ? state.cart.map((item) =>
                item.id === action.payload.id
                  ? { ...item, qty: item.qty + 1 }
                  : item
              )
            : [...state.cart, { ...item, qty: 1 }],
        };
      case REMOVE_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload.id),
         };
      case ADJUST_QTY:
        return {
          ...state,
          cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: action.payload.qty} : item)
         };
      default:
        return state;
    }
  };

  export default shopReducer;