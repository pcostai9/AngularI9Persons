import { Component } from '@angular/core';
import {PersonsServiceService} from './persons-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  

  //providers: [{provide: 'PersonsServiceService', useClass: PersonsServiceService}],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
