import { Component } from '@angular/core';
import { Hero, Prime, Status } from './hero';
import { HeroService } from './hero.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: `<h1>{{title}}</h1><h2>{{hero}} details!</h2>`,
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {
  title: string;
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    type: Prime.STRENGTH,
    status: Status.Radiant
  };
  message: string;
  prime: Prime;
  selectedHero: Hero;
  heroes: Hero[];
  constructor(private heroService: HeroService) {
    this.title = 'Tour of Heroes';
    this.heroes = this.heroService.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.message = "Hello " + hero.name;
  }
}