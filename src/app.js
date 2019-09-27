import React, { Component } from 'react';
import styled from 'styled-components';
import { APP_URL } from './constants';

import SearchBar from './search-bar';
import Result from './result';
import SavedGemsDisplay from './saved-gems';

const Wrapper = styled.div`
  width: 100%;
`;

const SearchContainer = styled.div`
  width: 100%;
`;

const Form = styled.form`
  padding: 2em;
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;
`;


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      savedGems: Object.keys(localStorage).map(key => JSON.parse(localStorage[key]))
    }
  }

  handleSave = (gem) => {
    if (localStorage[gem.sha]) {
       localStorage.removeItem(gem.sha)
    } else {
      localStorage.setItem(gem.sha, JSON.stringify(gem));
    }

    this.setState({ savedGems: Object.keys(localStorage).map(key => JSON.parse(localStorage[key])) });
  }

  search = (e) => {
    e.preventDefault();
    const query = e.currentTarget.children.search.value;

    fetch(`${APP_URL}/api/v1/search.json?query=${query}`)
    .then(response => response.json())
    .then(results => this.setState({ results }) );
  }

  render() {
    const { results, savedGems } = this.state;
    return (
      <Wrapper>
        <SavedGemsDisplay gems={this.state.savedGems} />
        <SearchContainer>
          <Form onChange={this.search} onSubmit={this.search}>
            <SearchBar />
          </Form>
          <ResultsContainer>
            {results.map((r, i) => <Result key={i} {...r} handleSave={this.handleSave} />)}
          </ResultsContainer>
        </SearchContainer>
      </Wrapper>
    );
  }
}

export default App;
