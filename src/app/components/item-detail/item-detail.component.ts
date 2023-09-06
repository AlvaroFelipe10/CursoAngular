import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/Car';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  car?: Car;

  constructor(private listService: ListService, private route: ActivatedRoute ){
    this.getCar()
  }

  ngOnInit(): void {

  }

  getCar(){
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getItem(id).subscribe((car) => (this.car = car));
  }

}
