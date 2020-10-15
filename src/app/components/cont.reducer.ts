import { createReducer, on } from '@ngrx/store';
import * as fromContador from './cont.actions';

export const initialState = 10;

const _contadorReducer = createReducer(
  initialState,
  on(fromContador.INCREMENTAR,(state)=> state + 1),
  on(fromContador.DECREMENTAR,(state)=> state + -1),
  on(fromContador.MULTIPLICAR,(state)=> state + 1),
  on(fromContador.DIVIDIR,(state)=> state + 1),
  );

  export function contadorReducer(state,action){
    return _contadorReducer(state,action)
  }