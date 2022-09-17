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

    default:
      return state;
  }
};
export default categoriesReducer;
