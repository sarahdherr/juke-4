import React, {Component} from 'react';
import store from '../store.js';
import Lyrics from '../components/Lyrics';
import {setLyrics, fetchLyrics} from '../action-creators/lyrics';
import axios from 'axios';

export default class LyricsContainer extends Component {
	constructor () {
		super();
		this.state = Object.assign({artistQuery:'', songQuery:''}, store.getState());
		
		this.setArtist = this.setArtist.bind(this);
		this.setSong = this.setSong.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.unsubscribe = store.subscribe( () => this.setState( store.getState() ));
	}

	componentWillUnmount() {
		this.unsubscribe();
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

	handleSubmit(e) {
		// console.log(this.state);
		e.preventDefault();
		if (this.state.songQuery && this.state.artistQuery) {
			store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery));
		}
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