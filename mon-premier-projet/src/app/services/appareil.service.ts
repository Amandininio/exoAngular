import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppareilService {
  appareilSubject = new Subject<any[]>();
  private appareils = [];
  // private appareils = [
  //     {
  //       id: 1,
  //       name: 'Machine à Laver',
  //       status: 'eteint'
  //     },
  //     {
  //       id: 2,
  //       name: 'Television',
  //       status: 'Allumé'
  //     },
  //     {
  //       id: 3,
  //       name: 'Enceinte',
  //       status: 'Allumé'
  //     }
  //   ];

  constructor(private httpClient: HttpClient) {}

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      s => {
        return s.id === id;
      }
    );
    return appareil;
  }

  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }

  switchOnAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'Allumé';
    }
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'Eteint';
    }
    this.emitAppareilSubject();
  }
  switchOnOne(i: number) {
    this.appareils[i].status = 'Allumé';
    this.emitAppareilSubject();
  }
  switchOffOne(i: number) {
    this.appareils[i].status = 'Eteint';
    this.emitAppareilSubject();
  }
  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;

    // Appareils lenght = 3; last appareil.id = appareil[2].id
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

  saveAppareilToServer() {
    this.httpClient
    // post permet de lancer un appel post post(URLTargeted, WhatToSend)
      .put('https://angularlearning-eed5e.firebaseio.com/appareils.json', this.appareils)
    // Post retourne un Observable mais ne fait pas d'appel à elle toute seule.
    // C'est en y souscrivant que l'appel est lancé ;
      .subscribe(
        (sayWhat) => {
          console.log('Enregistrement terminé !' + sayWhat);
        },
        (error) => {
          console.log('Erreur ! :' + error);
        }
      );
  }
  getAppareilFromServer() {
    this.httpClient
      .get<any[]>('https://angularlearning-eed5e.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        (sayWhat) => {
          this.appareils = sayWhat ;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur ! :' + error);
        }
      );
  }
}
