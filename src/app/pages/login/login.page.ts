import { Component, OnInit } from '@angular/core';

import { DataService ,  } from 'src/app/services/data.service';
import { ToastController } from '@ionic/angular';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  user = { 
    username:'',
    pass:''
  }

  

  
  constructor(private storageService : DataService , 
    private toasController: ToastController  ) { }

  ngOnInit() {
  }

  
  
  login() {
     
    if( this.storageService.login( this.user.username, this.user.pass )){
      this.showToast('logrado')
      
    }else{
      this.showToast('no logrado'+ this.user.pass + ' ' + this.user.username )
      console.log(this.user)
    }


  }
  


  async showToast(msg){
    const toast = await this.toasController.create({
      message : msg,
      duration : 2000

    });
    toast.present();

  }
  






}
