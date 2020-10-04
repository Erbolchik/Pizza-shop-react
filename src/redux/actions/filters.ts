export const setSortBy = (name: string) => ({
  type: 'SET_SORT_BY',
  payload: name,
});

export const setCategory = (categoryIndex: number) => ({
  type: 'SET_CATEGORY',
  payload: categoryIndex,
});
