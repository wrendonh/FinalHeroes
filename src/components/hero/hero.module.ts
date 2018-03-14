import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import React from 'react';
import { HeroListComponent } from './hero-list.component';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import { ConvertToMetersPipe } from './convert.to-meters.pipe';
import { ConvertToOrdinalPipe } from './convert-to-ordinal.pipe';
import { HeroInformationComponent } from './hero-information.component';

@NgModule({
    imports: [      
      CommonModule,
      FormsModule
    ],
    declarations: [
      HeroListComponent,
      HeroDetailComponent,
      HeroInformationComponent,
      ConvertToMetersPipe,     
      ConvertToOrdinalPipe,
    ],
    providers: [
      HeroService
    ]    
  })
  export class HeroModule { }