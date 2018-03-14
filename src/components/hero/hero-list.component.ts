import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import * as HeroActions from '../../store/hero/hero.actions';
import { State, selectFeatureHeroes } from '../../store/hero/hero.reducer';
import { Hero } from './hero';

@Component({
    selector: "app-hero",
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.scss']   
})

export class HeroListComponent implements OnInit{
    heroes$: Observable<Hero[]>;
    
    constructor(private store: Store<State>){             
    }

    ngOnInit(): void { 
        this.heroes$ = this.store.select(selectFeatureHeroes);
        this.heroes$.subscribe((t) => {
            if(t === undefined || t.length === 0) {      
                this.store.dispatch(new HeroActions.GetHeroes()); 
            }
        }); 
    }
}