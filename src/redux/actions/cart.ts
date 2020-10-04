export const addPizzaToCart = (pizzaObj: any) => ({
  type: 'ADD_PIZZA_CART',
  payload: pizzaObj,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const removeCartItem = (id: number) => ({
  type: 'REMOVE_CART_ITEM',
  payload: id,
});

export const plusCartItem = (id: number) => ({
  type: 'PLUS_CART_ITEM',
  payload: id,
});

export const minusCartItem = (id: number) => ({
  type: 'MINUS_CART_ITEM',
  payload: id,
});
