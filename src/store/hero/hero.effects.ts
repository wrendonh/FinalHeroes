import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import * as HeroActions from './hero.actions';
import { HeroService } from '../../components/hero/hero.service';
import { Hero, IHero } from '../../components/hero/hero';

@Injectable()
export class HeroEffects {
    constructor(private heroService: HeroService, private actions$: Actions) {}

    @Effect()
    getHeroes$: Observable<Action> = this.actions$
        .ofType<HeroActions.GetHeroes>(HeroActions.GET_HEROES)
        .switchMap(() => { 
            let hero$: Observable<IHero[]> = this.heroService.getHeroes();
            return hero$;
        })
        .map(heroes => new HeroActions.GetHeroesSuccess(heroes))    
}
