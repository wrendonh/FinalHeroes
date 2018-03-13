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

export const selectFeature = (state: State) => state.heroes;

export function HeroReducer(state = initialState, action: HeroActions.All): State {
    console.log(state, action);

    switch (action.type) {
        case HeroActions.GET_HEROES_SUCCESS: {
            return <State>{ 
                heroes: [...state.heroes, ...action.payload], 
                heroSelected: null 
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
