import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { FormsModule } from '@angular/forms';
// import { NgIf, UpperCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  // standalone: true,
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
  // imports: [FormsModule, NgIf, UpperCasePipe]
})


export class HeroDetailComponent implements OnInit{
  // @Input() hero?: Hero;

  hero: Hero | undefined

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back()
  }

  save(): void {
    if(this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack())
    }
  }
}
