import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { Email } from '../models/email.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private socket: Socket) { }

  public loadEmails(username: string, password: string, port: number, server: string) {
    this.socket.emit('load-emails', username, password, port, server);
  }

  public getEmails = () => {
    return Observable.create((observer: any) => {
            this.socket.on('loaded-emails', (email: Email) => {
                observer.next(email);
            });
    });
}
}
