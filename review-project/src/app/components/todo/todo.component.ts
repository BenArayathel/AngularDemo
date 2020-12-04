import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Pokemon } from 'src/app/models/poke';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  //imageWidth: number = aServiceIDI.iconWidth;

  toShow: boolean = true;

  randomVariable: any = 2;

  pokeList: Array<Pokemon>; // We declare a pokemon list for our component

  constructor(private myService: MyServiceService) { //Angular injects the service to our class

    // this.pokeList = [];
    this.pokeList = myService.pokemomBattleSquad; //We use the service to implement our pokemon list. 
  }

  ngOnInit(): void {
  }

  toggleList(){
    this.toShow = !this.toShow
  }

}
