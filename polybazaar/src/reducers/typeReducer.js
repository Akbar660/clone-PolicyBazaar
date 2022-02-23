export const getAllTypeReducers = (state = { types: {} }, action) => {
  switch (action.type)
  {
    case "GET_TYPES_REQUEST":
      return {
        ...state,
      };
    case "GET_TYPES_SUCCESS":
      return {
        types: action.payload,
      };
    case "GET_TYPES_FAILED":
      return {
        types: action.payload,
      };
    default:
      return state;
  }
};
