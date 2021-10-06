import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private router: Router) {}


  home(){
    this.router.navigate(['/home'])
  }

  ngOnInit() {
  }

}
