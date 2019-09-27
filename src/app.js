import React, { Component } from 'react';
import styled from 'styled-components';
import { APP_URL } from './constants';

import SearchBar from './search-bar';
import Result from './result';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3em;
`;

const Form = styled.form`
  width: 100%;
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  width: 50%;
`;


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    }
  }
  search = (e) => {
    const query = e.currentTarget.children.search.value;

    fetch(`${APP_URL}/api/v1/search.json?query=${query}`)
    .then(response => response.json())
    .then(results => this.setState({ results }));
  }

  render() {
    const { results } = this.state;
    return (
      <Wrapper>
        <Form onChange={this.search}>
          <SearchBar />
        </Form>
        <ResultsContainer>
          {results.map((r, i) => <Result key={i} {...r} />)}
        </ResultsContainer>
      </Wrapper>
    );
  }
}

export default App;
