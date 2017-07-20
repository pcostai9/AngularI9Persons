import {Routes, RouterModule} from '@angular/router'; 
import {PersonsListComponent} from './persons-list/persons-list.component';
import {PersonsDetailsComponent} from './persons-details/persons-details.component';

const routes: Routes = [
    { path: 'list',
    component: PersonsListComponent 

    },
      { path: 'detail/:Person',
    component: PersonsDetailsComponent 

    },


    {
      path: '',
      redirectTo:'list',
      pathMatch: 'full' 

    }

]

export const asRotas = RouterModule.forRoot(routes);