const initialState = [
  {
    name: "wood",
    count: 50
  },
  {
    name: "iron",
    count: 10
  },
  {
    name: "ironTool",
    count: 15
  }
];

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
