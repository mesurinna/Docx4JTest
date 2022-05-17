import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  data = {}  as any;
  files = {} as any;
  constructor(private http: HttpClient) {
    this.initDialog(http);

  }
  initDialog(http: HttpClient) {    
    http.get('http://localhost:8080/files').subscribe(files => this.files = files);    
    http.get('http://localhost:8080/resource').subscribe(data => this.data = data);
    
  }

}
