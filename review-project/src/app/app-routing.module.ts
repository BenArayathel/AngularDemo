import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentNameComponent } from './component-name/component-name.component';
import { TodoComponent } from './components/todo/todo.component';
import { TofinishComponent } from './components/tofinish/tofinish.component';
import { NameGuardGuard } from './name-guard.guard';

const routes: Routes = [

  {
    path: 'name/:myPathVariable',
    component: ComponentNameComponent
  },
  {
    path: 'todo',
    component: TodoComponent,
    canActivate: [NameGuardGuard]
  },
  {
    path: 'tofinish',
    component: TofinishComponent
  },
  {
    path: '**',
    redirectTo: 'todo',
    pathMatch: 'prefix'
  }

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
