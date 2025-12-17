const INIT_STATE = {
  carts: [],
};

const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {

    case "ADD_CART": {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        return {
          ...state,
          carts: state.carts.map((item, index) =>
            index === itemIndex
              ? { ...item, qnty: item.qnty + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        carts: [...state.carts, { ...action.payload, qnty: 1 }],
      };
    }

    case "RMV_CART":
      return {
        ...state,
        carts: state.carts.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "RMV_ONE":
      return {
        ...state,
        carts: state.carts
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, qnty: item.qnty - 1 }
              : item
          )
          .filter((item) => item.qnty > 0),
      };

    default:
      return state;
  }
};

export default cartreducer;
