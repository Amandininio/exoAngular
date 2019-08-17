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
      apiKey: 'AIzaSyBXOm3ffI-H_VmHGgykLHpaWOK1QDsbrG8',
      authDomain: 'postblogangular.firebaseapp.com',
      databaseURL: 'https://postblogangular.firebaseio.com',
      projectId: 'postblogangular',
      storageBucket: '',
      messagingSenderId: '562929782619',
      appId: '1:562929782619:web:4906d64a7466c8dd'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  }
}
