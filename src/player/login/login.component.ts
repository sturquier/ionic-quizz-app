import { Component } from '@angular/core';
import { Toast, ToastController, NavController } from 'ionic-angular';
import { Questions } from "../../questions/questions.component";
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
        this.nav.push(Questions)
    }
}