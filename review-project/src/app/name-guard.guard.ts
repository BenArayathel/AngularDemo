import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MyServiceService } from './services/my-service.service';

@Injectable({
  providedIn: 'root'
})
export class NameGuardGuard implements CanActivate {

  constructor(private serv: MyServiceService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      //this is where our logic goes!

      //I'm checking if my pokemon squad has more than 3 or more elements!
    return this.serv.pokemomBattleSquad.length >= 6 ? true: false;
  }
  
}
