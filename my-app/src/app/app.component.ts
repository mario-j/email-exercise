import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';  

  port = new FormControl('', [Validators.required]);
  server = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  selectedServerType = 'IMAP';
  selectedEncryption = 'Unencrypted';



  isValid() {
    return !this.port.errors && !this.server.errors && !this.username.errors && !this.password.errors;
  }

  onStart() {
    var port = this.port.value;
    var server = this.server.value;
    var username = this.username.value;
    var password = this.password.value;
    var selectedServerType = this.selectedServerType;
    var selectedEncryption = this.selectedEncryption;

    //TMP
    port = 993;
    server = 'imap.gmail.com';
    username = 'donaldmcgriddle@gmail.com';
    password = 'F00tball4!';
    

  }

  updateSelectedEncryption(value: string) {
    this.selectedEncryption = value;
  }

  updateSelectedServerType(value: string) {
    this.selectedServerType = value;
  }
}
