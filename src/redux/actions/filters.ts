export const setSortBy = ({ type, order }: { type: any; order: any }) => ({
  type: 'SET_SORT_BY',
  payload: { type, order },
});

export const setCategory = (categoryIndex: number) => ({
  type: 'SET_CATEGORY',
  payload: categoryIndex,
});
