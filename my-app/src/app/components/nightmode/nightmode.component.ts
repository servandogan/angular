import { Component } from '@angular/core';

@Component({
  selector: 'app-nightmode',
  templateUrl: './nightmode.component.html',
  styleUrls: ['./nightmode.component.css']
})
export class NightmodeComponent {
  isDarkTheme: boolean = false;

  toggleDarkTheme(){
    document.body.classList.toggle('dark-theme');
  }
}
