import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { TabsPage } from '../tabs/tabs';
import { AuthProvider } from '../../providers/auth/auth';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userData = { "username": "", "password": "", "email": "", "phone": "" };
  response: any;
  selector
  remember = true;
  credentialsForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    // if(localStorage.getItem('userLogin')){
    //   const data = JSON.parse(localStorage.getItem('userLogin'));
    //   this.userData.username = data.username;
    //   this.userData.password = data.password;
    //   this.userData.email = data.email;
    //   this.userData.phone = data.phone;
    // }
    this.credentialsForm = this.formBuilder.group({
      email: [''],
      password: [''],
      username: [''],
      phone: [''],
    });
    // mobile swipe events
    // document.getElementById("swipetarget").addEventListener("swiped-right", touchHandler_right, false);

    // function touchHandler_right() {
    //   console.log("Left")
    //   // plusDivs(-1)
    // }

    // document.getElementById("swipetarget").addEventListener("swiped-left", touchHandler_left, false);

    // function touchHandler_left() {
    //   console.log("right")
    //   // plusDivs(1)
    // }
  }
  register() {
    localStorage.removeItem("email")
    localStorage.removeItem("password")
    localStorage.removeItem("username")
    localStorage.removeItem("phone")
    localStorage.removeItem("userLogin")
    console.log("localStorage.getItem", localStorage.getItem("email"))
    if (this.credentialsForm.value.email != '') {
      if (localStorage.getItem("email") == null) {
        localStorage.setItem("email", (this.credentialsForm.value.email))
      }
    }
    if (this.credentialsForm.value.password != '') {
      if (localStorage.getItem("password") == null) {
        localStorage.setItem("password", (this.credentialsForm.value.password))
      }
    }
    if (this.credentialsForm.value.username != '') {
      if (localStorage.getItem("username") == null) {
        localStorage.setItem("username", (this.credentialsForm.value.username))
      }
    }
    if (this.credentialsForm.value.phone != '') {
      if (localStorage.getItem("phone") == null) {
        localStorage.setItem("phone", (this.credentialsForm.value.phone))
      }
    }






    if (localStorage.getItem('userLogin') == null) {

      this.userData.username = this.credentialsForm.value.username;
      this.userData.password = this.credentialsForm.value.password;
      this.userData.email = this.credentialsForm.value.email;
      this.userData.phone = this.credentialsForm.value.phone;
      localStorage.setItem('userLogin', JSON.stringify(this.userData))
    }
    setTimeout(() => {
      this.credentialsForm.reset()
    }, 500);
    this.selector = 1
  }


  swipeEvent(e) {

    if (this.selector == undefined) {
      this.selector = 1
      localStorage.setItem("selector", JSON.stringify(this.selector))
    }
    this.selector = JSON.parse(localStorage.getItem("selector"))
    if (this.selector == 1) {
      console.log("C1")
      this.selector = 2
      localStorage.setItem("selector", JSON.stringify(this.selector))
    }
    else if (this.selector == 2) {
      console.log("C2")
      this.selector = 1
      localStorage.setItem("selector", JSON.stringify(this.selector))
    }
    console.log("Triggered", this.selector)
  }



  onLogin() {
    console.log(this.userData);
    let zest = this.loadingCtrl.create({
      content: "Loading...",
      duration: 5000,
      spinner: 'crescent'
    });
    var checker = 0;
    var email = localStorage.getItem("email")
    var password = localStorage.getItem("password")
    console.log("Emailpass", email, password)
    if (email == this.credentialsForm.value.email) {
      checker = 0;
    }
    else {
      checker = 1;
    }
    if (password == this.credentialsForm.value.password) {
      checker = 0;
    }
    else {
      checker = 1;
    }
    if (checker == 0) {
      this.navCtrl.push(TabsPage);
    }
    // localStorage.setItem('userLogin', JSON.stringify(this.userData));


    zest.present();


  }





}
