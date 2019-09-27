import React, { Component } from 'react';
import styled from 'styled-components';

const Gem = styled.div`
	margin: 1em 0;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
`;

const GemInfo = styled.a`
	text-decoration: none;
	color: black;
	width: 100%;
	margin-right: 2em;

	&:hover {
		color: darkred;
	}

	span {
		color: gray;
		margin-left: 2em;
	}
`;

const Name = styled.p`
	font-size: 2em;
	margin-bottom: 1em;
`

const BookmarkGem = styled.div`
	.fa-bookmark {
		font-size: 2em;
		cursor: pointer;

		&:hover {
			color: darkred;
		}
	}
`;

class Result extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fill: localStorage[`${props.sha}`]
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ fill: localStorage[`${nextProps.sha}`] })
	}

	handleSave = () => {
		this.props.handleSave && this.props.handleSave(this.props);
		this.setState({ fill: localStorage[this.props.sha] })
	}

	render() {
		const { authors, version, name, info, project_uri: projectUri } = this.props;
		const { fill } = this.state;

		return (
			<Gem>
				<GemInfo href={projectUri}>
					<Name>{name} <span>{version}</span></Name>
					<p>{info}</p>
					<p>Authors: {authors}</p>
				</GemInfo>
				<BookmarkGem>
					<i
						className={ `${fill ? 'fas' : 'far' } fa-bookmark`}
						onClick={this.handleSave}
					/>
				</BookmarkGem>
			</Gem>
		);
	}
}

export default Result;
