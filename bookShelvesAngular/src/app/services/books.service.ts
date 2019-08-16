import { Injectable } from '@angular/core';
import { Book } from '../models/books.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
// import {DataSnapshot} from ;

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Book[] = [];
  bookSubject = new Subject<Book[]>();

  constructor() {
    this.getBooks();
  }
  emitBooks() {
    this.bookSubject.next(this.books);
  }
  saveBooks() {
    firebase.database().ref('/books').set(this.books);
  }
  getBooks() {
    firebase.database().ref('/books')
    .on('value', (data/*: DataSnapshot*/) => {
      this.books = data.val() ? data.val () : [];
      this.emitBooks();
      }
    );
  }

  getSingleBook(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/books/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject (error);
          }
        );
      }
    );
  }

  createNewBook(newBook: Book) {
    this.books.push(newBook);
    this.saveBooks();
    this.emitBooks();
  }

  removeBook(book: Book) {
    console.log(book);
    if (book.photo) {
      const storageRef = firebase.storage().refFromURL(book.photo);
      console.log(storageRef);
      storageRef.delete().then(
        () => {
          console.log('Photo removed');
        },
        (error) => {
          console.log('Could not remove the picture! ' + error);
        }
      );
    }
    const bookIndexToRemove = this.books.findIndex(
      (bookEl) => {
        if (bookEl === book) {
          return true;
        }
      }
    );
    this.books.splice(bookIndexToRemove, 1);
    this.saveBooks();
    this.emitBooks();
  }
  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {

        const almostUniqueFileName = Date.now().toString();
        const upload = firebase.storage().ref()
          .child('images/' + almostUniqueFileName + file.name).put(file);

        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          () => {
            console.log('chargement...');
          },
          (error) => {
            console.log('erreur de chargement ! : ' + error);
            reject();
          },
          () => {
            resolve(upload.snapshot.ref.getDownloadURL());
          }
        );
      }
    );
  }
}
