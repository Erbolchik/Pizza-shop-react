type FiltersType = {
  category: number;
  sortBy: string;
};
const initialState: FiltersType = {
  category: 0,
  sortBy: 'popular',
};

const filters = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
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
