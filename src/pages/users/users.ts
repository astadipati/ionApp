import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { UserPage } from './user/user';
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  // ini konstuktornya harus dibuat terlebih dahulu
  // konstruktor ini menginject navbar
  // karena onGoback mengimplement navController jadi dipisah dengan koma
  constructor (private navCtrl: NavController){}
  // ini methodnya
  onLoadUser(name: string){
    this.navCtrl.push(UserPage, {userName: name});
  }
}
