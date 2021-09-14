import React, { Component } from 'react';
import { fetchCharactersById } from '../services/rickAndMortyApi';

export default class RickAndMortyDetailContainer extends Component {
  render() {
    return <CharacterDetail />;
  }
}
