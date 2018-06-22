import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'leaderboard',
	templateUrl: 'template.html'
})

export class Leaderboard {
	public score = '';
	public difficulty = '';
	public playerName = '';

	constructor(public navController: NavController, navParams: NavParams) {
		this.score = localStorage.getItem('score');
		this.difficulty = localStorage.getItem('difficulty')
		this.playerName = localStorage.getItem('playerName')
	}

	sendScore() {
		console.log('sent')
	}
}