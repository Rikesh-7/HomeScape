const initialState = { user: null, stocks: [] };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_STOCKS":
      return { ...state, stocks: action.payload };
    default:
      return state;
  }
};

export default rootReducer;