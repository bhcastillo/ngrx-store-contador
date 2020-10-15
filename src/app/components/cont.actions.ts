import { createAction, props } from "@ngrx/store";
import { IPayload } from './app.reducers';

export const INCREMENTAR = createAction('[contador] Incrementar');
export const DECREMENTAR = createAction('[contador] Decrementar');
export const MULTIPLICAR = createAction(
  '[contador] Multiplicar',
  props<IPayload>());
export const DIVIDIR = createAction(
  '[contador] Dividir',
  props<IPayload>());
export const RESET = createAction('[contador] Resetear');