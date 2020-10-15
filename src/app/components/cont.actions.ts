import { createAction } from "@ngrx/store";

export const INCREMENTAR = createAction('[contador] Incrementar');
export const DECREMENTAR = createAction('[contador] Decrementar');
export const MULTIPLICAR = createAction('[contador] Multiplicar');
export const DIVIDIR = createAction('[contador] Dividir');
export const RESET = createAction('[contador] Resetear');