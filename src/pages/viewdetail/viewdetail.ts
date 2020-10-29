import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';


@IonicPage()
@Component({
  selector: 'page-viewdetail',
  templateUrl: 'viewdetail.html',
})
export class ViewdetailPage {

  userData = { "id": "", "token": "", "orderid": "" };
  response: any;

  orders: any;
  orderdetails: any;
  data
  resArray = []
  L
  FINAL
  push = false
  HOME
  obj
  constructor(public auth: AuthProvider, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {

    // this.HOME="Home"
    this.auth.call();
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      // content: 'Signing-in...',
      content: `
      <div style="background:transparent;">
      <ion-spinner name="bubbles" >
      </ion-spinner>
      </div>`,
      duration: 5000,
      cssClass: 'my-loading-class'
    });
    if (localStorage.getItem("DATA") == undefined || localStorage.getItem("DATA") == null) {
      loading.present()
      // this.navCtrl.push("Home")
    }
    if (localStorage.getItem("DATA") == undefined || localStorage.getItem("DATA") == null) {
      setTimeout(() => {

        // this.navCtrl.push("Home")
        this.data = JSON.parse(localStorage.getItem("DATA"))
        var test = localStorage.getItem("DATA")
        console.log("test test", test)
        console.log("DATA IS HOME", this.data)


        var da = [], l = [], ALL_L;
        for (var i = 0; i < 250; i++) {
          da[i] = this.data[i].name;
          console.log("this.data[i].langauges.length", this.data[i].languages.length)

          l[i] = this.data[i].languages.length
          // const values = this.data[i].languages.split(',');
          // ALL_L[i]=values


          //  if(this.data[i].name[i].langauges.length!=0)
          //  {

          //  }
        }
        this.L = l
        // ALL_L = Object.keys(this.data).map(i => this.data);
        console.log("ALL_L", l)
        console.log("Printing name", da)

        // var resArray=[]
        for (var t = 0; t < 250; t++) {
          for (var e = 0; e < l[t]; e++) {
            var r = this.data[t].languages[e].name
            // console.log("Languages are",r)
            this.resArray.push(this.data[t].languages[e].name);
            var s1 = JSON.stringify(this.resArray, Object.keys(this.resArray).sort());
            console.log("s1 is", s1)
          }

        }
        console.log("RES IS", this.resArray)
        var filtered = this.resArray.filter(function (el) {
          return el != null;
        });


        console.log("Filtered", filtered)
        this.resArray = filtered
        // this.resArray=filtered
        // for(var i=0;i<250;i++)
        // {
        //  if()
        // }


        var lang_arr = []
        //  for(var j = 0; j < 250; j++)
        //  for(var e=0;e<l[i].length;e++)
        //  {


        //   =this.data[i].languages[e].name
        //  }

        var j, chunk = 2;

        // for (i = 0, j = this.data.length; i < j; i += chunk) {
        //   resArray.push(this.data.languages.slice(i, i + chunk));
        // }


      }, 5000);
    }
    else {


      // this.navCtrl.push("Home")
      this.data = JSON.parse(localStorage.getItem("DATA"))
      var test = localStorage.getItem("DATA")
      console.log("test test", test)
      console.log("DATA IS HOME", this.data)


      var da = [], l = [], ALL_L;
      for (var i = 0; i < 250; i++) {
        da[i] = this.data[i].name;
        console.log("this.data[i].langauges.length", this.data[i].languages.length)

        l[i] = this.data[i].languages.length
        // const values = this.data[i].languages.split(',');
        // ALL_L[i]=values


        //  if(this.data[i].name[i].langauges.length!=0)
        //  {

        //  }
      }
      this.L = l
      const obj = {};

      for (var f = 0; f < this.data.length; f++)
        for (e = 0; e < this.L[f]; e++) {
          console.log("this.data[f].name", this.data[f].name)
          obj[this.data[f].name] = this.data[f].languages[e].name

        }
      console.log("OBJ is ", obj)
      this.obj = obj
      // ALL_L = Object.keys(this.data).map(i => this.data);
      // console.log("ALL_L",l)
      console.log("Printing name", da)

      // var resArray=[]
      for (var t = 0; t < 250; t++) {
        for (var e = 0; e < l[t]; e++) {
          var r = this.data[t].languages[e].name
          // console.log("Languages are",r)
          this.resArray.push(this.data[t].languages[e].name);
          var s1 = JSON.stringify(this.resArray, Object.keys(this.resArray).sort());
          console.log("s1 is", s1)
        }

      }
      console.log("RES IS", this.resArray)
      var filtered = this.resArray.filter(function (el) {
        return el != null;
      });


      console.log("Filtered", filtered)
      this.resArray = filtered
      // this.resArray=filtered
      // for(var i=0;i<250;i++)
      // {
      //  if()
      // }


      var lang_arr = []
      //  for(var j = 0; j < 250; j++)
      //  for(var e=0;e<l[i].length;e++)
      //  {


      //   =this.data[i].languages[e].name
      //  }

      var j, chunk = 2;

      // for (i = 0, j = this.data.length; i < j; i += chunk) {
      //   resArray.push(this.data.languages.slice(i, i + chunk));
      // }


    }
  }







}
