import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ReservationsFormComponent } from './reservations/reservations-form/reservations-form.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationsService } from './reservations/reservations.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ReservationsFormComponent,
    ReservationsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'reservations', component: ReservationsComponent},
      { path: 'reservations-add', component: ReservationsComponent},
      { path: 'reservations-edit/:id', component: ReservationsComponent},
    ])
  ],
  providers: [ReservationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
