
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';


export interface Data{
  id: number;
  name: string;
  lastname:string;
  years:number,
  gender:string;
  email:string;
  username : string;
  password:string;
  modified:number; 
  
}



export const ITEMS_KEY = 'DB1';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _storage: Storage;
  authenticationState = new BehaviorSubject(false);


  constructor(private storage:Storage , private plt : Platform ) { 
    

    

    this.init();

  }
  
  
  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }
 
  


  
  addData(data:Data):Promise<any>{
    return this.storage.get(ITEMS_KEY).then((d : Data[])=>{
      if (d){
        d.push(data);
        
        return this.storage.set(ITEMS_KEY, d);
      }else{
        return this.storage.set(ITEMS_KEY, [data]);
      }
    });
          
  }

  
  getData(): Promise <Data[]> {
    return this.storage.get(ITEMS_KEY);

  }

  updateData(data:Data): Promise<any>{
    return this.storage.get(ITEMS_KEY).then((d : Data[])=>{
      if(!d || d.length == 0 ){
        return null;
      }
      let newdata: Data[] = [];
      for (let i of d){
        if(i.id === data.id){
          newdata.push(data);
        }else{
          newdata.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY , newdata) 
    });
  }

  deleteData(id : number): Promise<Data>{
   return this.storage.get(ITEMS_KEY).then((data : Data[])=>{
     if (!data || data.length === 0 ){
       return null;
     }
     let toKeep: Data[] = [];
     for(let i of data){
       if(i.id !== id ){
         toKeep.push(i);
       }
     }
     return this.storage.set(ITEMS_KEY, toKeep); 
   });

  }
   
   
  login( username : string , pass : string)  {
    let islogin :  boolean; 
    this.storage.get(ITEMS_KEY).then((data : Data[])=>{
      for(let i of data){
        if(i.username == username && i.password == pass){
          console.log('Correcto')
          return islogin = true;
        }else{
          console.log('Incorrecto');
          return islogin = false ;   
        }
      } 
    });
    console.log(islogin +  "boolean final ")
    return  islogin;
  }
  
   
   
  
  

}
