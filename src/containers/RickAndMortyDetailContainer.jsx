import React, { Component } from 'react';
import { fetchCharactersById } from '../services/rickAndMortyApi';

export default class RickAndMortyDetailContainer extends Component {
  state = {
    loading: true,
    character: {},
  }

  componentDidMount() {
    fetchCharactersById(this.state.match.props.id)
      .then((character) =>
        this.setState({ character, loading: false })
      );
  }

  render() {

    const { loading, character } = this.state;

    if(loading) {
      return (
        <img
          src="https://loading.io/icon/pd8fa5"
          alt="loading spinner"
        />
      );
    }

    return <CharacterDetail character={character} />;
  }
}
