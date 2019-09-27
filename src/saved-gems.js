import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%
	position: relative;
	background: white;
`;

const MyGemNav = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	cursor: pointer;
	margin-bottom: 2em;
	padding: 2em;

	.fas {
		margin-left: .5em;
	}

	&:hover {
		color: darkred;
	}
`;

const GemContainer = styled.div`
	position: absolute;
  top: 8em;
  background: white;
  padding: 20px;
  border-top: none;
  right: 0;
  min-width: 15em;
  text-align: right;
`;

const Gem = styled.div`
	font-size: 1.2em;
`;


class SavedGemsDisplay extends Component {
	constructor(props) {
		super(props);
		this.state = {showGems: false }
	}

	toggle = () => {
		this.setState({ showGems: !this.state.showGems });
	}

	getSavedGems() {
		return (
			<GemContainer>
				{this.props.gems.map((gem, i) => <Gem key={i}><a href={gem.project_uri}>{gem.name}</a></Gem> )}
			</GemContainer>
		);
	}

	render() {
		const { showGems } = this.state;

		return (
			<Wrapper>
				<MyGemNav onClick={this.toggle}>
					<h2>My Gems</h2>	
					<i className={`fas fa-angle-${showGems ? 'up' : 'down'}`}></i>
				</MyGemNav>
				{showGems && this.getSavedGems()}
			</Wrapper>
		);
	}
}

export default SavedGemsDisplay;
