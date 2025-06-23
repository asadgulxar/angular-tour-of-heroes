import { Component, Input } from "@angular/core";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.scss"],
})
export class HeroDetailComponent {
  hero!: Hero;

  constructor(private heroService: HeroService, private router: ActivatedRoute, private location: Location) {
    // You can initialize properties or inject services here if needed.
  } 

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.router.snapshot.paramMap.get("id"));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}