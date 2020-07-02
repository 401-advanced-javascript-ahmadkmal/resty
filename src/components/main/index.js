import React from 'react';
import { Route } from 'react-router-dom';
import History from '../history'
import Form from '../form/form';
import Home from '../home';
const Main = (props) => {
  return (
    <main>
      <Route exact path="/resty/">
        <Home />
      </Route>
      <Route exact path="/resty/history">
        <History />
      </Route>
    </main>
  );
};

export default Main;
