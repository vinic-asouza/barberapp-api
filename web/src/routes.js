import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main'
import outrapagina from './pages/outrapagina'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/outrapagina" component={outrapagina} />
      </Switch>
    </BrowserRouter>
  );
}