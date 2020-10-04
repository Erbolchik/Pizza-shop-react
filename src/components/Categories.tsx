import React, { useState } from 'react';
type CategoriesType = {
  items?: Array<string>;
};
export const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
}: {
  activeCategory: number;
  items: any;
  onClickCategory: (index: number | null) => void;
}) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>
          Все
        </li>
        {items &&
          items.map((name: string, index: number) => (
            <li
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onClickCategory(index)}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});
