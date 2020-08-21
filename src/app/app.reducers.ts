import { Todo } from "./todo/model/todo.model";
import { ActionReducerMap } from '@ngrx/store';

import * as reducersTodo from "./todo/todo.reducer";
import * as reducersFiltro from "./filter/filter.reducer";
import * as actionsFiltro from "./filter/filter.actions";

export interface AppState {
  todos: Todo[],
  filtro: actionsFiltro.filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {

  todos: reducersTodo.todoReducer,
  filtro: reducersFiltro.filterReducer
}
