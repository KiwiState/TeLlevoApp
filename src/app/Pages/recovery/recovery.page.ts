import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage implements OnInit {
  nombreUsu:string;

  constructor(private activeRoute: ActivatedRoute, private router: Router, public alertController: AlertController) { 
    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.nombreUsu = this.router.getCurrentNavigation().extras.state.dato;
        console.log(this.nombreUsu)
      }
    });
  }

  alerta(){
    this.presentAlert(this.nombreUsu)
  }

  async presentAlert(msg:string){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: this.nombreUsu,
      message: 'Se envió un mail con el código de recuperación a su correo electronico',
      buttons: ['Ok']
    });
    await alert.present();

    const {role}= await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role)
  }


  ngOnInit() {
  }

}
