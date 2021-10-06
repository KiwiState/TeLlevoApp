import { Component } from '@angular/core';
import { NavigationExtras,Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  hide=true;

  nombreUsu:string;

  constructor(public toastController: ToastController, private router: Router) {}

  ingre(){
    let navigationExtras: NavigationExtras ={
      state: {dato: this.nombreUsu} 
    };

  this.router.navigate(['/pagina2'],navigationExtras);
  }

  recovery(){
    let navigationExtras: NavigationExtras ={
      state: {dato: this.nombreUsu}
    };

  this.router.navigate(['/recovery'],navigationExtras);
  }

  pasa(){
    let navigationExtras: NavigationExtras ={
      state: {dato: this.nombreUsu}
    };

  this.router.navigate(['/pasajero'],navigationExtras);
  }

  

}
 