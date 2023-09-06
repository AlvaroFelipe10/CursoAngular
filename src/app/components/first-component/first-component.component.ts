import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Alvaro';
  age: number = 27;
  job: 'programador' | undefined;
  hobbies = ['Correr', 'jogar', 'programar'];
  car = {
    name: 'up',
    year: 2015
  }

  constructor(){

  }

  ngOnInit(): void {

  }

}
