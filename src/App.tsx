import React, { useEffect, useState } from 'react';
import { Header } from './components';
import { Cart, Home } from './pages';
import { Route } from 'react-router-dom';
import axios from 'axios';
export type pizzaProp = {
  id: number;
  imageUrl: string;
  name: string;
  types: Array<number>;
  sizes: Array<number>;
  price: number;
  category: number;
  rating: number;
};
function App() {
  const [pizzas, setPizzas] = useState<pizzaProp | never[]>([]);
  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => setPizzas(data.pizzas));
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home items={pizzas} />} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
