import { Component } from '@angular/core';
import { Toast, ToastController, NavController } from 'ionic-angular';
import { Home } from "../../home/home.component";
import { Player } from "../../shared/models";

@Component({
    selector:'login',
    templateUrl:'template.html'
})
export class Login {
    private player: Player = {
        login: '',
        avatar: ''
    };
    private toast: Toast;
    private difficulty: ''

    constructor(public toastCtrl:ToastController, public nav: NavController) {
        this.toast = toastCtrl.create({
            message: 'Player successfully saved',
            duration: 3000,
            position: 'top'
        })

        if (localStorage.getItem('playerName') !== null) {
            this.player.login = localStorage.getItem('playerName')
        }
    }

    login(playerName) {
        localStorage.setItem('playerName', playerName)
        this.toast.present()
        this.nav.push(Home)
    }
}