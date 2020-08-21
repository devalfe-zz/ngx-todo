import { Action } from "@ngrx/store";

export const AGREGAR_TODO = '[TODO] Agregar todo'
export const TOGGLE_TODO = '[TODO] Toggle todo'
export const EDITAR_TODO = '[TODO] Editar todo'
export const BORRAR_TODO = '[TODO] Borrar todo'
export const TOGGLE_ALL_TODO = '[TODO] Toggle All todo'
export const BORRAR_ALL_TODO = '[TODO] Borrar All todo'


export class agregarTodoAction implements Action {
  readonly type = AGREGAR_TODO
  constructor(public texto: string) { }
}

export class toggleTodoAction implements Action {
  readonly type = TOGGLE_TODO
  constructor(public id: number) { }
}

export class editarTodoAction implements Action {
  readonly type = EDITAR_TODO
  constructor(public id: number, public texto: string) { }
}

export class borrarTodoAction implements Action {
  readonly type = BORRAR_TODO
  constructor(public id: number) { }
}

export class toggleAllTodoAction implements Action {
  readonly type = TOGGLE_ALL_TODO
  constructor(public completado: boolean) { }
}

export class borrarAllTodoAction implements Action {
  readonly type = BORRAR_ALL_TODO

}

export type Acciones = agregarTodoAction |
  toggleTodoAction |
  editarTodoAction |
  borrarTodoAction |
  toggleAllTodoAction |
  borrarAllTodoAction

