import { Injectable } from '@angular/core';
import { Post } from '../models/posts.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable()
export class PostsService {
    posts: Post[] = [];
    postSubject = new Subject<Post[]>();

    constructor() {
        this.getPosts();
    }

    emitPost() {
        this.postSubject.next(this.posts);
    }

    savePost() {
        firebase.database().ref('/posts').set(this.posts);
    }

    getPosts() {
        firebase.database().ref('/posts')
            .on('value', (data) => {
                this.posts = data.val() ? data.val() : [];
                this.emitPost();
            }
        );
    }

    getSinglePost(id: number) {
        return new Promise(
            (resolve, reject) => {
                firebase.database().ref('/posts/' + id).once('value').then(
                    (data) => {
                        resolve(data.val());
                    }, (error) => {
                        reject (error);
                    }
                );
            }
        );
    }

    createNewPost(newPost: Post) {
        this.posts.push(newPost);
        this.savePost();
        this.emitPost();
    }

    removePost(post: Post) {
        const postIndexToRemove = this.posts.findIndex(
            (postEl) => {
                if (postEl === post) {
                    return true;
                }
            }
        );
        this.posts.splice(postIndexToRemove, 1);
        this.emitPost();
        this.savePost();
    }

    onAction(post: Post, value: number) {
        post.loveIts += value;
        this.emitPost();
        this.savePost();
    }

    getColor(post: Post) {
        if (post.loveIts < 0) {
          return '#ffcccc';
        } else if (post.loveIts > 0) {
          return '#99e699';
        } else {
          return 'white';
        }
      }
      getColorText(post: Post) {
         // console.log(post);
          if (post.loveIts < 0) {
          return '#800000';
        } else if (post.loveIts > 0) {
          return '#1f7a1f';
        } else {
          return 'black';
        }
      }

}
