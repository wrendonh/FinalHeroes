
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroModule } from './../hero/hero.module';
import { StoreModule } from '@ngrx/store';
import { HeroReducer } from '../../store/hero/hero.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HeroEffects } from '../../store/hero/hero.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,    
    HttpClientModule,
    HeroModule,
    AppRoutingModule,
    StoreModule.forRoot({ heroesState: HeroReducer }),
    EffectsModule.forRoot([HeroEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }