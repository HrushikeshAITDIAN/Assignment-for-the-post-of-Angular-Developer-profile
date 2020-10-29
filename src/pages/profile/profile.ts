import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  userDetails:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
    if(localStorage.getItem('userLogin')!=null){
      console.log("userLogin",localStorage.getItem('userLogin'))
      const data = JSON.parse(localStorage.getItem('userLogin'));
      this.userDetails = data;
      console.log("userLogin",this.userDetails)
    }
    console.log("Constructor",localStorage.getItem('userLogin'))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  
  
  onlogout(){
  this.app.getRootNav().setRoot(LoginPage);
  localStorage.removeItem("email")
    localStorage.removeItem("password")
    localStorage.removeItem("username")
    localStorage.removeItem("phone")
    localStorage.removeItem("userLogin")
  }
}
