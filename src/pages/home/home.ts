import { UsersPage } from './../users/users';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // sudah punya cunstruktor yang sudah diinjek ionic angular
  constructor(public navCtrl: NavController) {
  }
  // method ini akan mengarahkan ke halaman Users, sekarang tinggal di daftarkan ke app.modules
  // jangan lupa untuk mengimport ya
  onGoToUsers(){
    this.navCtrl.push(UsersPage);
  }
}
