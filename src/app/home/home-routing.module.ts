import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { PasajeroComponent } from '../pasajero/pasajero.component';
import { ConductorComponent } from '../conductor/conductor.component';


const routes: Routes = [
  {
    path: '', //path
    component: HomePage, 
    children: [{
      path: 'pasajero',
      component: PasajeroComponent
    },
      {
        path:'conductor',
        component: ConductorComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
