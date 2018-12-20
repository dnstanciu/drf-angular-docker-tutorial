import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

import { TaskListComponent } from './task-list/task-list.component';
import { CallbackComponent } from './callback/callback.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: TaskListComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'callback', component: CallbackComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
