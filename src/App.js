import React from 'react';
import Home from './pages/home';
import { Route, Switch } from 'react-router-dom';
import About from './pages/about';
import Listmakanan from './pages/list-makanan';
import FastFood from './pages/list-makanan-festfood';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/list-makanan" exact component={Listmakanan} />
        <Route path="/fast-food" exact component={FastFood} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
