
//General Angular injectors etc
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
//using Stars Dashboard and StarsDetails as links and comps for now
import { StarsComponent } from './stars/stars.component';
import { DashboardComponent } from './dashboard.component';
import { StarDetailComponent } from './star-detail/star-detail.component';
import { PicturesComponent } from './pictures/pictures.component';

//Http Routing and Service to uplink and provide 
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { StarService }         from './star.service';
import { ApiService} from './api.service';
import { DataService } from './data.service';
import { PictureBusService } from './picture-bus.service';




@NgModule({
  declarations: [

  AppComponent,
  DashboardComponent,
  StarDetailComponent,
  StarsComponent,
  PicturesComponent
  ],
  imports: [
  BrowserModule,
  FormsModule, 
  HttpModule, 
  AppRoutingModule
  ],
  providers: [StarService, ApiService, DataService, PictureBusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
