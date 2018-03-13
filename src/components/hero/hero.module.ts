import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import React from 'react';
import { HeroListComponent } from './hero-list.component';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import { ConvertToMetersPipe } from './convert.to-meters.pipe';
import { ConvertToOrdinalPipe } from './convert-to-ordinal.pipe';
import { HeroComponent } from './hero.component';

@NgModule({
    imports: [      
      CommonModule
    ],
    declarations: [
      HeroComponent,
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