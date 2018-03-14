import { Component, OnChanges, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'app-herodetail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnChanges {
    @Input() hero: Hero;
        
    constructor(private _route: ActivatedRoute,
        private _router: Router) {

    }

    onDetail() {
        this._router.navigate(['/heroes', this.hero._id]);
    }

    ngOnChanges(): void {
    }
}