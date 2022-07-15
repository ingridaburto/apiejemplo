import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getComments(){
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }
  getalbums(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }
  gettodos(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
  getusers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getphotos(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
