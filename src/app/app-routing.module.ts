import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { PicturesComponent } from './pictures/pictures.component';
import { StarsComponent } from './stars/stars.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StarDetailComponent } from './star-detail/star-detail.component';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'pictures',  component: PicturesComponent },
  { path: 'detail/:id', component: StarDetailComponent },
  { path: 'stars',     component: StarsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
