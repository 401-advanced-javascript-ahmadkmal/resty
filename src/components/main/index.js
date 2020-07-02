import React from 'react';
import { Route } from 'react-router-dom';
import History from '../history'
import Form from '../form/form';
import Home from '../home';
const Main = (props) => {
  return (
    <main>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/history">
        <History />
      </Route>
    </main>
  );
};

export default Main;
