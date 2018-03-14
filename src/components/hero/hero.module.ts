import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import React from 'react';
import { HeroListComponent } from './hero-list.component';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import { ConvertToMetersPipe } from './convert.to-meters.pipe';
import { ConvertToOrdinalPipe } from './convert-to-ordinal.pipe';

@NgModule({
    imports: [      
      CommonModule
    ],
    declarations: [
      HeroListComponent,
      HeroDetailComponent,
      ConvertToMetersPipe,     
      ConvertToOrdinalPipe,
    ],
    providers: [
      HeroService
    ]    
  })
  export class HeroModule { }