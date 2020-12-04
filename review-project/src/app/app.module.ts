import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentNameComponent } from './component-name/component-name.component';
import { TodoComponent } from './components/todo/todo.component';
import { TofinishComponent } from './components/tofinish/tofinish.component';
import { MyServiceService } from './services/my-service.service';
import { MyAttributeDirective } from './my-attribute.directive';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//This is a decorator in Angular (looks like an annotation in Java.) - passing meta data to Angular
@NgModule({
  declarations: [//used for declaring components, directives (and pipes)
    AppComponent,
    ComponentNameComponent,
    TodoComponent,
    TofinishComponent,
    MyAttributeDirective
  ],
  imports: [ // used to import external modules 
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ //used to declare services, the provider essentially tells the Injector which object it needs to create and maintian. 
    MyServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
