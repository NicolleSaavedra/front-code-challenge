import { Component, OnInit} from '@angular/core';
import {House} from './house';
import {HouseService} from './house.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html'
})
export class HousesComponent implements OnInit{

  houses: House[];

  constructor(private houseService:HouseService) { }

  ngOnInit () {
    this.houseService.getHouses().subscribe(
      houses => this.houses = houses
    );
  }
}
