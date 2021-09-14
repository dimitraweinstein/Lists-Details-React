import React, { Component } from 'react';
// eslint-disable-next-line max-len
import { fetchCharacters, fetchCharactersById } from '../services/rickAndMortyApi';

export default class RickAndMortyContainer extends Component {
  render() {
    return <CharacterList />;
  }
}
