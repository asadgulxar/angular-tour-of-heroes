import { Component, Input } from "@angular/core";
import { Hero } from "../hero";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.scss"],
})
export class HeroDetailComponent {
  @Input() hero!: Hero;

  constructor() {
    // You can initialize properties or inject services here if needed.
  }

  // You can also add methods to handle actions related to the hero detail.
}