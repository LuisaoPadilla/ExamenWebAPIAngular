import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReservationsService } from '../reservations.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IReservation } from '../reservations';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reservations-form',
  templateUrl: './reservations-form.component.html',
  styleUrls: ['./reservations-form.component.css']
})
export class ReservationsFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private reservationsServices: ReservationsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  public modoEdicion: boolean = false;
  formGroup: FormGroup;
  public reservationId: number;

  ngOnInit() {
    this.formGroup = this.fb.group({
      title: '',
      date: '',
      pacient: '',
      symtoms: '',
      sick: '',
      medicaments: '',
      medic: '',
      status:''
    });

    this.activatedRoute.params.subscribe(params => {
      if (params["id"] == undefined) {
        return;
      }
      this.modoEdicion = true;
      this.reservationId = params["id"];
      this.reservationsServices.getReservation(this.reservationId.toString())
        .subscribe(res => this.cargarFormulario(res))
      error => console.error(error);
    });
  }

  cargarFormulario(res: IReservation) {
    var dp = new DatePipe(navigator.language);
    var formmat = "yyyy-MM-dd";
    this.formGroup.patchValue({
      title: res.title,
      date: dp.transform(res.date, formmat),
      pacient: res.pacient,
      sick: res.sick,
      medicaments: res.medicaments,
      symtoms: res.symtoms,
      medic: res.medic,
      status: res.status
    })
  }

  save() {
    let reservation: IReservation = Object.assign({}, this.formGroup.value);
    console.table(reservation);

    if (this.modoEdicion) {
      // editar el registro
      reservation.id = this.reservationId;
      this.reservationsServices.updateReservation(reservation)
        .subscribe(reservation => this.onSave(),
          error => console.error(error));
    } else {
      // agregar el registro

      this.reservationsServices.createReservation(reservation)
        .subscribe(reservation => this.onSave(),
          error => console.error(error));
    }
  }

  onSave() {
    this.router.navigate(["/"]);
  }

}
