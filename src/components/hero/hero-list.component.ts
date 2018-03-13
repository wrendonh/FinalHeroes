
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import * as HeroActions from '../../store/hero/hero.actions';
import { State } from 'store/hero/hero.reducer';
import { Hero } from './hero';

@Component({
    selector: "app-hero-list",
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.scss']   
})

export class HeroListComponent {
    @Input() heroes;   
}