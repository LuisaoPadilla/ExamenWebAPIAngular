import { Component, OnInit } from '@angular/core';
import { IReservation } from './reservations';
import { ReservationsService } from './reservations.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  reservations: IReservation[];

  constructor(private reservationsService: ReservationsService) { }

  ngOnInit() {
    this.initData();
  }
  
  initData() {
    this.reservationsService.getReservations()
      .subscribe(response => this.reservations = response,
        error => console.error(error));
  }

}
