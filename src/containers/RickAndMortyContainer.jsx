import React, { Component } from 'react';
// eslint-disable-next-line max-len
import { fetchCharacters } from '../services/rickAndMortyApi';

export default class RickAndMortyContainer extends Component {
  render() {
    return <CharacterList />;
  }
}
