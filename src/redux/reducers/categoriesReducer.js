const initalState = {
  start: false,
  success: false,
  categories: [],
  fail: false,
  errorMassage: "",
};

const categoriesReducer = (state = initalState, action) => {
  switch (action.type) {
    case "FETCH_CATEGORİES_START":
      return {
        ...state,
        start: true,
      };
    case "FETCH_CATEGORİES_SUCCESS":
      return {
        ...state,
        start: false,
        success: true,
        categories: action.payload,
      };

    case "FETCH_CATEGORİES_FAIL":
      return {
        ...state,
        start: false,
        fail: true,
        errorMassage: action.payload,
      };

    default:
      return state;
  }
};
export default categoriesReducer;
