import React, { useState } from 'react';
type CategoriesType = {
  items?: Array<string>;
};
export function Categories(props: CategoriesType) {
  const { items } = props;
  const [activeItem, setActiveItem] = useState(0);

  const onSelectItem = (index: number) => setActiveItem(index);
  return (
    <div className="categories">
      <ul>
        {items &&
          items.map((name: string, index: number) => {
            return (
              <li
                key={`${name}_${index}`}
                className={activeItem === index ? 'active' : ''}
                onClick={() => onSelectItem(index)}>
                {name}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
