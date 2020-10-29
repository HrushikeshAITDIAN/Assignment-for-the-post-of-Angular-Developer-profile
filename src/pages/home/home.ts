import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ViewdetailPage } from '../viewdetail/viewdetail';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userData = {"id":"", "token":"", "orderid" : ""};
  response:any;

  orders:any;
  image_local=[]
  constructor(public auth:AuthProvider, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    if(localStorage.getItem('UserData')){
      const data = JSON.parse(localStorage.getItem('UserData'));
      this.userData.id = data.id;
    }
   

    // for(var i=0;i<2;i++){
    this.image_local.push("../../assets/imgs/imgfirst.PNG")
    this.image_local.push("../../assets/imgs/imgsecond.PNG")
    // }
    console.log("img",this.image_local)
  }

  ionViewWillEnter(){

  }

viewdetail(){
  this.navCtrl.push(ViewdetailPage);
}
  





}
