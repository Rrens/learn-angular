// ASSETS per Components
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import {
//   /* . . . */
//   NgFor, NgIf, UpperCasePipe,
//    /* . . . */
// } from '@angular/common'
// import { FormsModule } from '@angular/forms';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
// import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit {
  // selectedHero?: Hero;

  heroes: Hero[] = [];

  // constructor(private heroService: HeroService, private messageService: MessageService) {}
  constructor(private heroService: HeroService) {}

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

  ngOnInit(): void{
    this.getHeroes()
  }

  add(name: string): void {
    name = name.trim()
    if (!name) { return }
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero)
      })
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero)
    this.heroService.deleteHero(hero.id).subscribe()
  }
}
