import axios from 'axios';

export const setLoaded = (payload: any) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = (sortBy: any, category: any) => (dispatch: any) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });

  axios
    .get(
      `/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
        sortBy.order
      }`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items: any) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
