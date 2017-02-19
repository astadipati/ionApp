import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'page-user',
    templateUrl: 'user.html'
})
export class UserPage implements OnInit {
    // inisialisasi name disini
    name: string; 
// buat konstruktornya dulu untuk nangkap value dari UsersPage
    constructor (private navParams: NavParams){}
    ngOnInit(){
        this.name = this.navParams.get('userName');
    }
}