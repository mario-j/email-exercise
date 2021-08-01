import { stringify } from '@angular/compiler/src/util';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Email } from './models/email.model';
import { EmailService } from './services/email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private emailService: EmailService) { }

  emails: Email[] = [];
  selectedEmail: Email | null = null;
  @ViewChild('bodyContainer') bodyContainer: ElementRef | undefined;

  ngOnInit() {
    this.emailService.getEmails().subscribe((email: Email) => {
      var loadedEmail = new Email();
      loadedEmail.subject = email.subject;
      loadedEmail.from = email.from;
      loadedEmail.date = email.date;
      loadedEmail.body = email.body;
      console.log("loadedEmail", loadedEmail);
      let emails = [...this.emails];
      emails.push(loadedEmail);
      var unsortedEmails = [...this.emails, loadedEmail]
      this.emails = unsortedEmails.sort((a: Email, b: Email) => new Date(b.date!!).getTime() - new Date(a.date!!).getTime());
    });
  }

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

  loadEmails() {
    this.emails = [];
    var port = this.port.value;
    var server = this.server.value;
    var username = this.username.value.toString();
    var password = this.password.value;
    var selectedServerType = this.selectedServerType;
    var selectedEncryption = this.selectedEncryption;

    //TMP
    // port = 993;
    // server = 'imap.gmail.com';
    // username = 'donaldmcgriddle@gmail.com';
    // password = 'mailbird2021';
    // selectedServerType = 'imap';

    // port = 995;
    // server = 'pop.gmail.com';
    // username = 'donaldmcgriddle@gmail.com';
    // password = 'mailbird2021';
    // selectedServerType = 'pop3';

    this.emailService.loadEmails(username, password, port, server, selectedServerType)
  }

  updateSelectedEncryption(value: string) {
    this.selectedEncryption = value;
  }

  updateSelectedServerType(value: string) {
    this.selectedServerType = value;
  }

  selectEmail(email: Email) {
    this.selectedEmail = email;
    this.bodyContainer!!.nativeElement.innerHTML = email.body;
  }
  
  calculateEmailsContainerHeight() {
    const numberOfItems = this.emails.length;
    return (100 * this.emails.length).toString() + 'px';
  }
}
