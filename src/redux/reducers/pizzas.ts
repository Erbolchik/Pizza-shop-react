type pizzaProp = {
  id: number;
  imageUrl: string;
  name: string;
  types: Array<number>;
  sizes: Array<number>;
  price: number;
  category: number;
  rating: number;
};
type itemsProp = {
  items: Array<pizzaProp> | never[];
  isLoaded: boolean;
};
const initialState: itemsProp = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case 'SET_PIZZAS':
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
export default pizzas;
