import * as HeroActions from '../hero/hero.actions';
import { Hero } from '../../components/hero/hero';
import { createSelector } from '@ngrx/store';

export type Action = HeroActions.All;

export interface State {        
    heroes: Hero[],
    heroSelected: Hero
}

const initialState: State = {
    heroes: [],
    heroSelected: null        
}

export function HeroReducer(state = initialState, action: HeroActions.All): State {
    console.log(state, action);

    switch (action.type) {
        case HeroActions.GET_HEROES_SUCCESS: {
            let heroReturn: Hero[] = new Array();
            let hero: Hero;
            let acum: number = 0;
        
            action.payload.forEach((t) => {
                acum = acum + 1;
                hero = new Hero();
                hero._id = acum;
                hero._name = t._name;
                hero._height = t._height;
                hero._nickname = t._nickname;
                hero._picture = t._picture;
                
                heroReturn.push(hero);
            });
            
            return <State>{ 
                heroes: [...state.heroes, ...heroReturn], 
                heroSelected: null 
            }
        }

        case HeroActions.SELECT_HERO: {
            let selectedHero: Hero = new Hero();

            state.heroes.forEach((t) => {                                       
                if(t._id == action.payload) {
                    selectedHero = Object.assign({}, t);
                }
            })

            return <State>{
                heroes: [...state.heroes],
                heroSelected: selectedHero
            }
        }

        case HeroActions.GET_HERO: {
            return { ...state, heroSelected: state.heroes[action.payload] }
        }

        case HeroActions.UPDATE_HEROE: {
            return { ...state, 
                heroes: state.heroes.map(t => {
                    if (t._id == action.payload._id) {                        
                        Object.assign(t, action.payload);
                    }

                    return t;
                }) 
            }
        }

        default: {
            return state;
        }
    }
}

export const selectFeature = (state: any) => state.heroesState;
export const selectFeatureHeroes = createSelector(selectFeature, (state: any) => state.heroes);
export const selectFeatureSelectedHero = createSelector(selectFeatureHeroes, (state: any) => state.heroSelected);

