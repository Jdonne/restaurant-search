const initialState = {
  refInput: "",
  cityInput: "",
  restaurants: [],
  refDisplay: "hidden",
  errorMsg: "",
  error: "hidden",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_CITY_INPUT":
      return {
        ...state,
        cityInput: action.citySearch,
      };
    case "CHANGE_RESTAURANTS":
      return {
        ...state,
        restaurants: action.cityRes,
      };
    case "CHANGE_REF_INPUT":
      return {
        ...state,
        refInput: action.refSearch,
      };
    case "CHANGE_HIDDEN":
      return {
        ...state,
        refDisplay: action.display,
      };
    case "CHANGE_ERROR":
      return {
        ...state,
        error: "",
        errorMsg: action.msg,
      };
    case "CHANGE_NO_ERROR":
      return {
        ...state,
        error: "hidden",
        errorMsg: "",
      };

    default:
      return state;
  }
}

export default reducer;
