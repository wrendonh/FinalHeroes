import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroListComponent } from './../hero/hero-list.component';
import { HeroDetailComponent } from './../hero/hero-detail.component';
import { HeroInformationComponent } from '../hero/hero-information.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HeroListComponent, pathMatch: 'full' },
      { path: 'heroes', component: HeroListComponent, pathMatch: 'full' },
      { path: 'heroes/:id', component: HeroInformationComponent },      
      { path: '', redirectTo: 'heroes', pathMatch: 'full' },
      { path: '**', redirectTo: 'heroes', pathMatch: 'full' }
    ])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }