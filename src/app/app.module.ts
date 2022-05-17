import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FillFormComponent } from './dialogs/fill-form/fill-form.component';
import { HomeComponent } from './dialogs/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { TopBarComponent } from './layouts/top-bar/top-bar.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FillDocxComponent } from './components/fill-docx/fill-docx.component';

@NgModule({
  declarations: [
    AppComponent,
    FillFormComponent,
    HomeComponent,
    TopBarComponent,
    FileUploadComponent,
    FillDocxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
