import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';
import { pizzaProp } from '../App';

const itemsCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = ['популярности', 'цене', 'алфавиту'];

export function Home({ items }: any) {
  debugger;
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories items={itemsCategories} />
          <SortPopup items={sortItems} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {items.map((item: any) => {
            return <PizzaBlock key={item.id} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
