import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'; 
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { TableofFlightsComponent } from './components/tableof-flights/tableof-flights.component';
import { AirlineDetailsComponent } from './components/airline-details/airline-details.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

const appRoutes: Routes = [
  {path: '', component: TableofFlightsComponent},
  {path: 'details/:id', component: AirlineDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TableofFlightsComponent,
    AirlineDetailsComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),//, {enableTracing: true}),
    HttpClientModule,
    MatTableModule,
    MatListModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
