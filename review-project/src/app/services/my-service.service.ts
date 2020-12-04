import { Injectable } from '@angular/core';
import { Pokemon } from '../models/poke';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  //Creates and shares an array of Pokemon

  pokemomBattleSquad: Pokemon[];

  constructor() { 
    //Right now I'm hardcoding all the information 
    this.pokemomBattleSquad = [
      {name: 'Pikachu'},
      {name: 'Ivysaur'},
      {name: 'red lizard'}
    ]

  }
}


