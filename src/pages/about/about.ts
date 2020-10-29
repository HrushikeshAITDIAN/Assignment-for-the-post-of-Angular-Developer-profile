import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  userData = {"id":"", "token":""};
  response:any;

  orders:any;
  product
  constructor(public auth:AuthProvider, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    if(localStorage.getItem('UserData')){
      const data = JSON.parse(localStorage.getItem('UserData'));
      this.userData.id = data.id;
    }
   

    this.product={
      "0": [{
    "category": "15",
    "description": "Body Lotion 200ml",
    "homepage": "NO",
    "id": "1",
    "image": "body_lotion.jpg",
    "name": "Body Lotion",
    "offer": "YES",
    "price": "200",
    "quantity": "200",
    "quantitytype": "Ml"
      }],
      "1": [{
    "category": "15",
    "description": "Hand Sanitiser",
    "homepage": "NO",
    "id": "3",
    "image": "hand_sanitiser.jpg",
    "name": "Hand Sanitiser",
    "offer": "YES",
    "price": "150",
    "quantity": "200",
    "quantitytype": "Ml"
  }],


  "2": [{
    "category": "14",
    "description": "Yogurt 250ml",
    "homepage": "NO",
    "id": "8",
    "image": "yogurt.jpg",
    "name": "Yogurt",
    "offer": "YES",
    "price": "50",
    "quantity": "250",
    "quantitytype": "Ml"
  }],

  "3": [{
 "category": "16",
    "description": "Blender 400W1",
    "homepage": "NO",
    "id": "9",
    "image": "blender.jpg",
    "name": "Blender",
    "offer": "YES",
    "price": "1500",
    "quantity": "1",
    "quantitytype": "Pcs"
  }]

}
this.product=JSON.stringify(this.product)
localStorage.setItem("this.product",this.product)
this.product=JSON.parse(this.product)
var prod=[];
for(var i=0;i<4;i++){
  prod.push(this.product[i][0])
}
// this.product = JSON.parse(JSON.stringify(prod))
// this.product  = Object.assign({}, prod );
// this.product=this.product.json()
this.product=prod
// for (var i = 0; i < this.product.length; ++i){
//   this.product["position" + (i+1)] = this.product[i];
// }
 
//  this.product=JSON.parse(this.product)

// this.product = Object.keys(this.product).map(function(personNamedIndex){
//   let items = this.product[personNamedIndex];
// // const entries = Object.entries(person);

// // console.log(entries);
// })

// this.product=Object.keys(this.product).map(i => this.product[i])
console.log("product",this.product)
}
  ionViewWillEnter(){
   
  }




  getitemQuantity(itemid){
    this.product=JSON.parse(localStorage.getItem("this.product"))
    for(let item of this.product){
      if(item.itemid == itemid)
      return item.Mquantity;
    }
    return 0;
  }



  changeProductQty(itemid, change){
    this.product=JSON.parse(localStorage.getItem("this.product"))
    let i = 0;
    for(let item of this.product){
      if(item.itemid == itemid){
        let qty = parseInt(item.Mquantity);
        qty += parseInt(change);
        if(qty != 0){
          item.Mquantity = qty.toString();
        }else if(qty == 0){
          console.log(item);
          this.product.splice(i, 1);
        }
          // this.toastController.create({
          //   message: "Cart Updated.",
          //   duration: 2000
          // }).present();
    }
    i++;
  }
}





 

}
