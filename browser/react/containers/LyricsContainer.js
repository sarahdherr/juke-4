import React, {Component} from 'react';
import store from '../store.js';
import Lyrics from '../components/Lyrics';

export default class LyricsContainer extends Component {
	constructor (props) {
		super(props);
		this.state = Object.assign(store.getState(), {artistQuery:'', songQuery:''});
		
		this.setArtist = this.setArtist.bind(this);
		this.setSong = this.setSong.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.unsubscribe = store.subscribe( () => this.setState( store.getState() ));
	}

	setArtist(value) {
		this.setState({
			artistQuery: value
		})
	}

	setSong(value) {
		this.setState({
			songQuery: value
		})
	}

	handleSubmit() {
		console.log(this.state);
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		return (
			<Lyrics 
				setArtist={this.setArtist}
				setSong={this.setSong}
				artistQuery={this.state.artistQuery}
				songQuery={this.state.songQuery}
				handleSubmit={this.handleSubmit}
				text={this.state.text}
			/>
		);
	}
}