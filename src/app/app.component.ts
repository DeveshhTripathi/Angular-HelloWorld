import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule , NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Helloworld';
  message: string = "Hello ";
  imgUrl: string = "https://media.licdn.com/dms/image/v2/C510BAQEYyeT3P0H_mw/company-logo_200_200/company-logo_200_200/0/1630611149363/bridgelabz_com_logo?e=2147483647&v=beta&t=TFgRiaA55f57NqQFnUbnsKu3mQo7c-LOfD8_iNSgtNM";
  bridgeLabzUrl: string = "https://www.bridgelabz.com";

  userName: string = "";
  errorMessage: string = ""; 

  validateUserName() {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/; 
    if (!namePattern.test(this.userName)) {
      this.errorMessage = "Name must start with a capital letter and have at least 3 characters.";
    } else {
      this.errorMessage = ""; // No error
    }
  }

  launchBridgeLabz() {
    window.open(this.bridgeLabzUrl, "_blank"); // Opens URL in a new tab
  }
}
