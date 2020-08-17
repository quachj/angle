import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angle';
  
  loadScript() {
    console.log("testing2");
    const source = "";
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = source;
  }
}
