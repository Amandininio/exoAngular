import { Subject } from 'rxjs';

export class AppareilService {
  appareilSubject = new Subject<any[]>();
  private appareils = [
      {
        id: 1,
        name: 'Machine à Laver',
        status: 'eteint'
      },
      {
        id: 2,
        name: 'Television',
        status: 'Allumé'
      },
      {
        id: 3,
        name: 'Enceinte',
        status: 'Allumé'
      }
    ];

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
}
