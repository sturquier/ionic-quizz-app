import { Component } from '@angular/core';
import { Toast, ToastController, NavController, NavParams } from 'ionic-angular';
import { Questions } from '../questions/questions.component'

@Component({
	selector: 'home',
	templateUrl: 'template.html',
})
export class Home {
	private difficulty = '';
	private toast: Toast;

	constructor(public nav: NavController, public toastCtrl: ToastController) {
		this.toast = toastCtrl.create({
			message: 'Difficulty successfully choosed',
			duration: 3000,
			position: 'top'
		})

		if (localStorage.getItem('difficulty') !== null) {
			this.difficulty = localStorage.getItem('difficulty')
		}
	}

	selectDifficulty(difficulty) {
		localStorage.setItem('difficulty', difficulty)
		localStorage.setItem('playerName', localStorage.getItem('playerName'))
		this.toast.present()
		this.nav.push(Questions)
	}

}
