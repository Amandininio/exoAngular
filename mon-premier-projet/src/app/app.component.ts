import { Component } from '@angular/core';
//import { resolve } from 'dns';
//import { reject, timeout } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  lastUpdate = new Promise(
    (resolve,reject)=>{
      const date = new Date();
      setTimeout(
        ()=>{
          resolve(date);
        },2000
      );
    }
  );
  appareils=[
    {
      name:'Machine à Laver',
      status:'eteint'
    },
    {
      name:'Television',
      status:'Allumé'
    },
    {
      name:'Enceinte',
      status:'Allumé'
    }
  ];

  constructor(){
    setTimeout( () => {
        this.isAuth = true;
      },1000
    );
  }
  onAllumer(){
    console.log('on allume tout');
  }
}
