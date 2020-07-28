import React from 'react';
type CategoriesType = {
  items: Array<string>;
};
export function Categories(props: CategoriesType) {
  const { items } = props;
  return (
    <div className="categories">
      <ul>
        {items.map((name: string, index: number) => {
          return (
            <li key={`${name}_${index}`} className="active">
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
