import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url="https://chat-4b282-default-rtdb.europe-west1.firebasedatabase.app/messages.json"
  
  refMessages:AngularFireList<any>
  
  constructor(private http:HttpClient,
    private db: AngularFireDatabase
  ) {
    this.refMessages=db.list("messages")
   }

  fireGetMessages(){
      return this.refMessages
  }

  getMessages(){
    return this.http.get(this.url)
  }

  firePostMessage(message:string){
    let body={username:"JAttila", text:message}
    this.refMessages.push(body)
  }

  postMessage(message:string){
    let body={username:"JAttila", text:message}
    return this.http.post(this.url, body)
  }
  
}
