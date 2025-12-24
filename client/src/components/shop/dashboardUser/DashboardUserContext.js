export const dashboardUserState = {
  userDetails: null,
  loading: false,
  OrderByUser: null,
  searchTerm: "",
};

export const dashboardUserReducer = (state, action) => {
  switch (action.type) {
    case "userDetails":
      return {
        ...state,
        userDetails: action.payload,
      };
    case "OrderByUser":
      return {
        ...state,
        OrderByUser: action.payload,
      };
    case "loading":
      return {
        ...state,
        loading: action.payload,
      };
    case "searchTerm":
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};
