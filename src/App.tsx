import React, { useEffect } from 'react';
import { Header } from './components';
import { Cart, Home } from './pages';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';

function App(props: any) {
  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => props.setPizzas(data));
  }, [props]);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home items={props.items.pizzas} />} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}
const mapStateToProps = (state: any) => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    setPizzas: (items: any) => dispatch(setPizzasAction(items)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
