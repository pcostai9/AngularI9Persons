import { Injectable } from '@angular/core';
import { Person} from './person';
@Injectable()
export class PersonsServiceService {

  People:Person[] = [
    {Name:'Antonio',Year: 31, Role: 'developer', Salary: 12},
    {Name:'Manuel',Year: 21, Role: 'NR', Salary: 1200000},
    {Name:'Costa',Year: 55, Role: 'Arquiteto', Salary: 20},
    {Name:'Alexandre',Year: 15, Role: 'estudante', Salary: 0}

    

  ];

  getAll():Person[] {
    return this.People;

  }

  getPersonByID(id:number): Person{
    return this.People[id];

  }

  constructor() { }



}
