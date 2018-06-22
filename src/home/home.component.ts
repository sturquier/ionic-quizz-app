import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'home',
	templateUrl: 'template.html',
})
export class Home {
	difficulty: string = '';

	constructor(public navCtrl: NavController, public navParams: NavParams) {}

	selectDifficulty(difficulty) {
		console.log(difficulty)
	}

}
