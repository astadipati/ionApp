import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component({
    selector: 'page-user',
    templateUrl: 'user.html'
})
export class UserPage implements OnInit {
    // inisialisasi name disini
    name: string; 
// buat konstruktornya dulu untuk nangkap value dari UsersPage
// karena konstuktor juga mengimplement nav controller
    constructor (
        private navParams: NavParams,
        private navCtrl: NavController){}
    ngOnInit(){
        this.name = this.navParams.get('userName');
    }
    onGoBack(){
    //this.navCtrl.pop(); //kembali satu tingkat
    this.navCtrl.popToRoot();
    }
}