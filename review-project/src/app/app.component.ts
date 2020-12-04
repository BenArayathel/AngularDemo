import { Component } from '@angular/core';

@Component({ //Directive, explaining to angular that this is a component class 
  selector: 'app-root',
  templateUrl: './app.component.html', //html template
  styleUrls: ['./app.component.css'] //css template 
})
export class AppComponent {// we use export to make sure it's available outside the file. 
  title = 'review-project';
}
