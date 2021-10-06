import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {

  nombreUsu:string;

  constructor(private activeRoute: ActivatedRoute, private router: Router, public alertController: AlertController, private modalCtrl: ModalController) { 
    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.nombreUsu = this.router.getCurrentNavigation().extras.state.dato;
        console.log(this.nombreUsu)
      }
    });
  }

  listado(){
    this.router.navigate(['/listado'])
  }
  

  ngOnInit() {
  }

}
