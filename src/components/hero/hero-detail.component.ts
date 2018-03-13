import { Component, OnChanges, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IHero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'app-herodetail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnChanges {       
    @Input() hero: IHero;    
    
    ngOnChanges(): void {        
    }
}