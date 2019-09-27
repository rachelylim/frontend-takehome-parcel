import React, { Component } from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
	padding: 20px;
	border: none;
	border-bottom: 2px solid black;
	width: 100%;
	background-color: transparent;
	font-size: 28px;
`;

class SearchBar extends Component {
	render() {
		return (
			<SearchInput placeholder="Search gems" />
		);
	}
}

export default SearchBar;