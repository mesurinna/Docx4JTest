import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FillFormComponent } from './dialogs/fill-form/fill-form.component';
import { HomeComponent } from './dialogs/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'fillForm/:fileName', component: FillFormComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
