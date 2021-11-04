import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService , Data } from 'src/app/services/data.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  

  data : Data[]=[];
  newdata : Data = <Data>{};
  @ViewChild('myList')myList : IonList;

  constructor(private storageService : DataService , private plt: Platform , 
    private toasController: ToastController , private storage : Storage) {

      this.plt.ready().then(()=>{ this.loadData() ; });

  }

  loadData(){
    this.storageService.getData().then(data=> {
      this.data=data;
      
    });
  }


  addData(){
    this.newdata.id= Date.now();
    this.newdata.modified= Date.now();
    this.storageService.addData(this.newdata).then(d=>{
      this.newdata = <Data>{};
      this.showToast('! Aggregated data');
      this.loadData();
    });
  }


  async showToast(msg){
    const toast = await this.toasController.create({
      message : msg,
      duration : 2000

    });
    toast.present();

  }

  ngOnInit() {
  }

  onSubmit(){
    console.log('submit');
    console.log(this.storage.get('DB1'));
  }




}
