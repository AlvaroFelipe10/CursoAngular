import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/Car';
import { ListService } from 'src/app/services/list.service';


@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  cars: Car[] = [];

  carDetail = '';

  constructor(private listService: ListService){
    this.getCars();
  }

  ngOnInit(): void {

  }

  showColor(car : Car){
    this.carDetail = `O ${car.model} é da cor ${car.color}`;
  }

  removeCar(car: Car){
   this.cars = this.cars.filter((a)=> car.model !== a.model);
   this.listService.remove(car.id).subscribe();
  }

  getCars(): void {
    this.listService.getAll().subscribe((cars)=> (this.cars = cars))
  }
}
