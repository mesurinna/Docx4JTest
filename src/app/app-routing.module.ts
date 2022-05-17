import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FillFormComponent } from './dialogs/fill-form/fill-form.component';
import { HomeComponent } from './dialogs/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'fillForm', component: FillFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
