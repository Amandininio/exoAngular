import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})


export class AppareilViewComponent implements OnInit {
 // isAuth = false;
  appareils: any;
  appareilSubscritpion: Subscription;

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );

  constructor(private appareilService: AppareilService) {
    // setTimeout( () => {
    //     this.isAuth = true;
    //   }, 5000
    // );
  }

  ngOnInit(): void {
    this.appareilSubscritpion = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }
  switchOnAll() {
    this.appareilService.switchOnAll();
  }
  switchOffAll() {
    if (confirm('Etes vous sur de vouloir tout éteindre?')) {
      this.appareilService.switchOffAll() ;
    } else {
      return null;
    }
  }
}
