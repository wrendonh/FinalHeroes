import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { IHero, Hero } from './hero';
@Injectable()
export class HeroService {
    private _heroUrl = 'https://udem.herokuapp.com/heroes';

    constructor(public http: HttpClient) { }

    getHeroes(): Observable<IHero[]> {
        return this.http.get<IHero[]>(this._heroUrl);
    }

    getHero(id: number): Observable<Hero> {
        return this.getHeroes().map((heroes: Hero[]) => heroes.find(h => h._id === id));
    }
}