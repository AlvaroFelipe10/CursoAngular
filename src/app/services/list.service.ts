import { Injectable } from '@angular/core';
import { Car } from '../Car';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/cars'

  constructor(private http: HttpClient) { }

  remove(cars: Car[], car: Car){
    return cars.filter((a)=> car.model !== a.model);
  }

  getAll(): Observable<Car[]>{
    return this.http.get<Car[]>(this.apiUrl)
  }

  getItem(id: number): Observable<Car>{
    return this.http.get<Car>(`${this.apiUrl}/${id}`);
  }
}
