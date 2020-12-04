import { Component, OnInit } from '@angular/core';
import { Planet } from './planet';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {

  currentUser = "Jupiter";

  planetList: Planet[];

  fruitList: Array<string>;

  constructor() {

    this.planetList = [ { name: "Mercury", moons:0, color:"yellow"},
     { name: "Venus", moons:1, color:"more yellow"},
     { name: "Earth", moons:1, color:"blue"},
     { name: "Mars", moons:2, color:"red"}]

    this.fruitList = ["apple","kiwi","banana", "strawberry"]

   }

  ngOnInit(): void {
  }

}
