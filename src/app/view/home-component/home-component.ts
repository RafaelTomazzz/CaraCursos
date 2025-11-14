import { Component } from '@angular/core';
import { LoginComponent } from '../login-component/login-component';

@Component({
  selector: 'app-home-component',
  imports: [LoginComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

}
