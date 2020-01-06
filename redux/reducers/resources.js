const initialState = {
  wood: 10,
  stone: 5
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_STONE":
      return {
        ...state,
        stone: action.data.resources.stone
      };
    default:
      return state;
  }
}
