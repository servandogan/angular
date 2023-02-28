import { Component, OnInit} from '@angular/core';
import { FlightsService } from 'src/app/services/flights.service';
import { map, of, Subject } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tableof-flights',
  templateUrl: './tableof-flights.component.html',
  styleUrls: ['./tableof-flights.component.css']
})

export class TableofFlightsComponent implements OnInit{
  airlines: any[] = [];
  airlineId!: number;
  showPleaseWait = true;
  constructor(
    private flightsService: FlightsService,
    private router: Router,
    ){
  }
  //private subject = new Subject<any[]>();
  
  
  ngOnInit(){
    this.flightsService.getFlightService().subscribe((res: any) => {
      this.airlines = res;
      console.log(res);
      this.showPleaseWait = false;
    })

  }

  

  getPassengersByAirlinesId(id: number){
    console.log(id);
    this.airlineId = id;
    console.log("jsonstringify: ", JSON.stringify({queryParams: this.airlineId}));
    //(<any>this.router).navigate(['details'], {queryParams: this.airlineId})
    this.router.navigate(['/details', this.airlineId]);
    //for(let i = 0; i < 37762; i++){
    //this.flightsService.getPassengerService(this.airlines, 0).subscribe((res:any) => {
    //  console.log(res);
    //})
    //}
  }
  //dataSource = this.subject.asObservable();

}
