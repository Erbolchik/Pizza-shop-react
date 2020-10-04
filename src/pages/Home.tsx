import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';

const itemsCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

export function Home({ items }: any) {
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories items={itemsCategories} />
          <SortPopup items={sortItems} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {items &&
            items.map((item: any) => {
              return <PizzaBlock key={item.id} {...item} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
