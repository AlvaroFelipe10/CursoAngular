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

  remove(id: number){
    return this.http.delete<Car>(`${this.apiUrl}/${id}`)
  }

  getAll(): Observable<Car[]>{
    return this.http.get<Car[]>(this.apiUrl)
  }

  getItem(id: number): Observable<Car>{
    return this.http.get<Car>(`${this.apiUrl}/${id}`);
  }
}
