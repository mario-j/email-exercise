import { Component } from '@angular/core';

interface Server {
  value: string;
  viewValue: string;
}

interface Encryption {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';  
  
  servers: Server[] = [
    {value: 'server-0', viewValue: 'Server 1'},
    {value: 'server-1', viewValue: 'Server 2'},
    {value: 'server-2', viewValue: 'Server 3'}
  ];

  encryptions: Encryption[] = [
    {value: 'encryption-0', viewValue: 'Encryption 1'},
    {value: 'encryption-1', viewValue: 'Encryption 2'},
    {value: 'encryption-2', viewValue: 'Encryption 3'}
  ];
}
