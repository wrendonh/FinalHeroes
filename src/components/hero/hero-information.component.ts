import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import * as HeroActions from '../../store/hero/hero.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { State, selectFeatureSelectedHero } from '../../store/hero/hero.reducer';

import { Hero } from './hero';

@Component({
    templateUrl: './hero-information.component.html',
    styleUrls: ['./hero-information.component.scss']
})
export class HeroInformationComponent implements OnInit {   
    selectedHero$: Observable<Hero>;
    
    _id: number;
    _name: string;
    _nickname: string;
    _height: number;    
    
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private store: Store<State>) {                    
                }

    ngOnInit(): void {
        this._id = +this._route.snapshot.paramMap.get('id');
        if (this._id) {
            const id = +this._id;
            this.getHero(id);
        }
    }

    getHero(id: number) {
        this.selectedHero$ = this.store.select(selectFeatureSelectedHero);
        this.selectedHero$.subscribe((t) => {
            if(t === undefined) {      
                this.store.dispatch(new HeroActions.SelectHero(id)); 
            }
        })   
        
        this.selectedHero$.map(t => {
            this._name = t._name;
            this._nickname = t._nickname;
            this._height = t._height;
        })
    }

    updateHero() {
        
    }

    onBack(): void {
        this._router.navigate(['']);
    }
}