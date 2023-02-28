import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})


export class FlightsService {

  AIRLINES = 'https://api.instantwebtools.net/v1/airlines';

  PASSENGER = 'https://api.instantwebtools.net/v1/passenger';

  AIRLINE = 'https://api.instantwebtools.net/v1/airlines'

  constructor(private http: HttpClient) { }

  getFlightService(){
    return this.http.get<any[]>(this.AIRLINES, httpOptions).pipe(map(results => results.filter((flight, index) => {
      return results.findIndex(f => f.name === flight.name) === index;
    })));
  }

  getPassengersByAirlinesIdService(airlineId: any){
    airlineId = parseInt(airlineId)
    console.log(typeof(airlineId))
    return this.http.get<any>(this.PASSENGER, httpOptions).pipe(map(results => results.data.filter((res: any) => res.airline[0].id == airlineId)))
  }

  getAirlineByAirlineIdService(airlineId: number){
    const url = `${this.AIRLINE}/${airlineId}`;
    return this.http.get<any>(url, httpOptions)
  }
}
