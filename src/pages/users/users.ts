import { UserPage } from './user/user';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  // ini konstuktornya harus dibuat terlebih dahulu
  // konstruktor ini menginject navbar
  constructor (private navCtrl: NavController){}
  // ini methodnya
  onLoadUser(name: string){
    this.navCtrl.push(UserPage, {userName: name});
  }
}
