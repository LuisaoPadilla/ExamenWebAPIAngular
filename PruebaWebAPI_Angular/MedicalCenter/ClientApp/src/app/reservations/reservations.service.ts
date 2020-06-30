import { Injectable,  Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IReservation } from './reservations';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  private apiURL = this.baseUrl + "api/Reservations";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getReservations(): Observable<IReservation[]> {
    return this.http.get<IReservation[]>(this.apiURL);
  }

  getReservation(reservationId: string): Observable<IReservation> {
    let params = new HttpParams().set('incluirDirecciones', "true");
    return this.http.get<IReservation>(this.apiURL + '/' + reservationId, { params: params });
  }

  createReservation(reservation: IReservation): Observable<IReservation> {
    return this.http.post<IReservation>(this.apiURL, reservation);
  }

  updateReservation(reservation: IReservation): Observable<IReservation> {
    return this.http.put<IReservation>(this.apiURL + "/" + reservation.id.toString(), reservation);
  }
}
