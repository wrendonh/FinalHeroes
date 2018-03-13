import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Hero } from '../../components/hero/hero';

export const GET_HERO = '[Hero] GET_HERO';
export const GET_HEROES = '[Hero] GET_HEROES';
export const GET_HEROES_SUCCESS = '[Hero] GET_HEROES_SUCCESS';
export const UPDATE_HEROE = '[Hero] UPDATE_HERO';
export const UPDATE_HEROE_SUCCESS = '[Hero] UPDATE_HERO_SUCCESS';

export class GetHero implements Action {
    readonly type = GET_HERO;

    constructor(public payload: number) {}
} 

export class GetHeroes implements Action {
    readonly type = GET_HEROES;
}

export class GetHeroesSuccess implements Action {
    readonly type = GET_HEROES_SUCCESS;

    constructor(public payload: Hero[]) {}
}

export class UpdateHero implements Action {
    readonly type = UPDATE_HEROE;

    constructor(public payload: Hero) {}
}

export class UpdateHeroSuccess implements Action {
    readonly type = UPDATE_HEROE_SUCCESS;

    constructor(public payload: Hero) {}
}

export type All = GetHero | GetHeroes | GetHeroesSuccess | UpdateHero | UpdateHeroSuccess;