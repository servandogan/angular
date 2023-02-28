import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Route } from '@angular/router';
import { FlightsService } from 'src/app/services/flights.service';

interface airline {
  id?: number;
  name: string;
  country?: string;
  logo?: string;
  slogan?: string;
  head_quaters: string;
  website: string;
  established: string;
}

@Component({
  selector: 'app-airline-details',
  templateUrl: './airline-details.component.html',
  styleUrls: ['./airline-details.component.css']
})
export class AirlineDetailsComponent implements OnInit{
  passengerByAirlineId!: [];
  airlineId!: any;
  airline!: airline;

  ngOnInit(){
    this.route.paramMap.subscribe((params) => {
      this.airlineId = params.get('id');
    })
    
    console.log(this.airlineId)
    this.getPassengersByAirlinesId()
    this.getAirlineByAirlineId()
  }

  constructor(
    private flightsService: FlightsService,
    private route: ActivatedRoute
  ){
  }

  getPassengersByAirlinesId(){
    // this.flightsservice.getPassengersByAirlinesIdService(this.tableofFlights.airlineId).subscribe(res =>
    //   console.log(res))
    this.flightsService.getPassengersByAirlinesIdService(this.airlineId).subscribe(res =>{
    this.passengerByAirlineId = res;
    console.log("responds: ", res);
    })
  }

  getAirlineByAirlineId(){
    console.log(this.airlineId)
    this.flightsService.getAirlineByAirlineIdService(this.airlineId).subscribe((res: any) =>{
      this.airline = res;
      console.log(res);
    })
  }
}
