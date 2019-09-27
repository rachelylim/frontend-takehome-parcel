import React, { Component } from 'react';
import styled from 'styled-components';

import SearchBar from './search-bar';

const Wrapper = styled.div`
  display: flex;
  padding: 80px;
`;

const Form = styled.form`
  width: 100%;
`;


class App extends Component {
  render() {
    return (
      <Wrapper>
        <Form>
          <SearchBar />
        </Form>
      </Wrapper>
    );
  }
}

export default App;
