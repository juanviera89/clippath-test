import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { OtherPage } from '../other/other';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public goto = false;
  public menuactive = false;
  constructor(public navCtrl: NavController, private nativePageTransitions: NativePageTransitions) {

    
    
  }

  gotoPAge(){
    this.goto = true;
    this.menuactive = false;
    setTimeout(()=>{
      this.goto = false;
      this.slidePage();
    },550)
  }

  flipPage() {
    let options2: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
     };
 
     console.log(options2);
     
    this.nativePageTransitions.flip(options2);
    this.navCtrl.push(OtherPage);
  }

  drawPage() {
    let options2: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
     };
 
     console.log(options2);
     
    this.nativePageTransitions.fade(options2);
    this.navCtrl.push(OtherPage);
  }

  slidePage() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
     };
     this.nativePageTransitions.slide(options);
      this.navCtrl.push(OtherPage);
  }

  ionViewDidLeave(){
    this.goto = false;
  }

  
  
}
