import { Component, OnInit } from '@angular/core';
import { PersonsServiceService} from '../persons-service.service';
import { Person } from '../person';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  providers: [PersonsServiceService],
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {
  
  People:Person[] = [ ];
  selectedPerson: Person;

  constructor(personsService: PersonsServiceService) {
    this.People = personsService.getAll(); 
   }

  ngOnInit() {
  }

  SelectPerson(onePerson: Person){
    this.selectedPerson = onePerson;

  }
}
