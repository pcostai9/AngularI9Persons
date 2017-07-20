import { Component, OnInit, Input } from '@angular/core';
import{Person} from '../person';
import{ActivatedRoute} from '@angular/router';
import { PersonsServiceService} from '../persons-service.service';

@Component({
  selector: 'app-persons-details',
  templateUrl: './persons-details.component.html',
  styleUrls: ['./persons-details.component.css']
})
export class PersonsDetailsComponent implements OnInit {
  routes:ActivatedRoute;
  peopleWS :PersonsServiceService;
  selectedPerson: Person;
  //@Input() selectedPerson: Person;

  constructor(personsService: PersonsServiceService,routes: ActivatedRoute) { 
    this.routes = routes;
    this.peopleWS = personsService
  }

  ngOnInit() {
    this.routes.params.subscribe(
      params=>{
        let identifier = params['Person'];
        this.selectedPerson = this.peopleWS.getPersonByID(identifier); 
      }

    );
  }

}
