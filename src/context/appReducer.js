const initialState = {};

function appReducer(state, action) {
  switch (action.type) {
    case "type1":
      return { ...state, keyInState: action.payload };
    default:
      console.log("reducer: unknown action type", action.type);
  }
}

export { initialState, appReducer };
