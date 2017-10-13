import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { listHeroes } from './heroes/mock-heroes'
@Injectable()

export class HeroService {
  getHeroes(): Hero[] {
    return listHeroes;
  } //sub
}