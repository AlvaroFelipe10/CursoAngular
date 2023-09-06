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
    console.log('removendo carro...');
   this.cars = this.listService.remove(this.cars, car);
  }

  getCars(): void {
    this.listService.getAll().subscribe((cars)=> (this.cars = cars))
  }
}
