import React, { Component } from 'react';
import styled from 'styled-components';

const Gem = styled.div`
	margin: 1em 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const GemInfo = styled.a`
	font-size: 2em;
	text-decoration: none;
	color: black;

	&:hover {
		color: darkred;
	}

	span {
		color: gray;
		margin-left: 2em;
	}
`;

const Authors = styled.p`
	font-size: .5em;
`

const BookmarkGem = styled.div`
	.fa-bookmark {
		font-size: 2em;
		cursor: pointer;
	}
`;

class Result extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fill: false
		};
	}

	toggleState = () => {
		this.setState({ fill: !this.state.fill });
	}

	handleSave = () => {

	}

	render() {
		const { authors, version, name, project_uri: projectUri } = this.props;
		const { fill } = this.state;

		return (
			<Gem>
				<GemInfo href={projectUri}>
					<p>{name} <span>{version}</span></p>
					<Authors>Authors: {authors}</Authors>
				</GemInfo>
				<BookmarkGem>
					<i
						className={ `${fill ? 'fas' : 'far' } fa-bookmark`}
						onClick={this.handleSave}
						onMouseOver={this.toggleState}
						onMouseOut={this.toggleState}
					/>
				</BookmarkGem>
			</Gem>
		);
	}
}

export default Result;
