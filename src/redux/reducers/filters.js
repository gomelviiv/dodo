const initialState = {
  sortBy: {
    type: 'rating',
    order: 'desc',
  },
  category: null,
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload,
      };
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
};

export default filters;
