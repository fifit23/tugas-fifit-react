import React from 'react';
import Counter from './component/counter';
import Home from './pages/home';
import { Route, Switch } from 'react-router-dom';
import About from './pages/about';
import CounterClass from './component/counter-class';
import Menu from './component/menu';
import DataDiri from './component/data-diri';
import Card from './component/card';
import Listmakanan from './pages/list-makanan';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/counter" exact component={Counter} />
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/counter-class" exact component={CounterClass} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/data-diri" extact component={DataDiri} />
        <Route path="/card" exact component={Card} />
        <Route path="/List-makanan" exact component={Listmakanan} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
