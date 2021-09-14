import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
// eslint-disable-next-line max-len
import { RickAndMortyDetailContainer, RickAndMortyContainer } from '../../containers/RickAndMortyContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RickAndMortyContainer} />
        <Route exact path="/:id" component={RickAndMortyDetailContainer} />
      </Switch>
    </Router>
  );
}
