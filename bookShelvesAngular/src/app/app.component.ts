import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAX7gBRZ2OeV7KTg_MZsHhq2-E0iJcsoYI',
      authDomain: 'bookshelvesangular.firebaseapp.com',
      databaseURL: 'https://bookshelvesangular.firebaseio.com',
      projectId: 'bookshelvesangular',
      storageBucket: 'bookshelvesangular.appspot.com',
      messagingSenderId: '262713355978',
      appId: '1:262713355978:web:63221a05191bca8c'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}

