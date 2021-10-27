import React from 'react';
import './public/styles/index.css'
import { Home } from './templates/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Colors } from './templates/Colors';
import { Numbers } from './templates/Numbers';
import { Alphabet } from './templates/Alphabet'
import { ColorPlay } from './templates/ColorsPlay';
import { NumberPlay } from './templates/Numberplay';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/colors" component={Colors}></Route>
        <Route exact path="/numbers" component={Numbers}></Route>
        <Route exact path="/alphabet" component={Alphabet}></Route>
        <Route exact path="/colors/play" component={ColorPlay}></Route>
        <Route exact path="/number/play" component={NumberPlay}></Route>
      </Switch>
    </Router>
  );
}

export default App;
