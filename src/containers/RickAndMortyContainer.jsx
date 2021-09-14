import React, { Component } from 'react';
// eslint-disable-next-line max-len
import { fetchCharacters } from '../services/rickAndMortyApi';

export default class RickAndMortyContainer extends Component {
  state = {
    loading: true,
    characters: [],
  }

  componentDidMount() {
    fetchCharacters()
      .then((characters) =>
        this.setState({ characters, loading: false })
      );
  }

  render() {
    const { loading, characters } = this.state;

    if(loading) {
      return (
        <img
          src="https://loading.io/icon/pd8fa5"
          alt="loading spinner" />
      );
    }
    
    return <CharacterList characters={characters} />;
  }
}
