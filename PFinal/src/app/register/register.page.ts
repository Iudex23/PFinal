import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public menuCtroller: MenuController) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.menuCtroller.enable(false);
  }

}
