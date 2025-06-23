import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { HEROES } from "./mock-data";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";


@Injectable({
    providedIn: 'root'
})
export class HeroService {
    constructor(private messageService: MessageService) {
        // You can initialize properties or inject services here if needed.
    }
    getHeroes(): Observable<Hero[]> {
        this.messageService.add('HeroService: fetched heroes');
        return of(HEROES);
    }
    
    getHero(id: number): Observable<Hero> {
        this.messageService.add(`HeroService: fetched hero id=${id}`);
        return of(HEROES.find(hero => hero.id === id) as Hero);
    }
}