import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import * as HeroActions from '../../store/hero/hero.actions';
import { State, selectFeature } from '../../store/hero/hero.reducer';
import { Hero } from './hero';

@Component({
    selector: "app-hero",
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']   
})

export class HeroComponent implements OnInit{
    heroes$: Observable<Hero[]>;
    selectedHero: boolean;

    constructor(private store: Store<State>){        
    }

    ngOnInit(): void { 
        this.heroes$ = this.store.select(selectFeature);
        this.heroes$.subscribe((t) => {
            if(t === undefined) {      
                this.store.dispatch(new HeroActions.GetHeroes()); 
            }
        });
    }
}