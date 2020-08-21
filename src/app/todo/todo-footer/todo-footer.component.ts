import { AppState } from 'src/app/app.reducers';
import { Component, OnInit } from '@angular/core';
import * as actionsFiltro from "../../filter/filter.actions";
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import * as actionsTodo from "../todo.actions";

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: [
  ]
})
export class TodoFooterComponent implements OnInit {

  pendientes: number

  filtrosValidos: actionsFiltro.filtrosValidos[] = ['todos', 'completados', 'pendientes']
  filtroActual: actionsFiltro.filtrosValidos

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.contarPendiente(state.todos)
      this.filtroActual = state.filtro
    })
  }
  cambiarFiltro(nuevoFiltro: actionsFiltro.filtrosValidos) {
    const accion = new actionsFiltro.setFiltroAction(nuevoFiltro)
    this.store.dispatch(accion)
  }

  contarPendiente(todos: Todo[]) {
    this.pendientes = todos.filter(todo => !todo.completado).length
  }

  borrarTodo() {
    const accion = new actionsTodo.borrarAllTodoAction()
    this.store.dispatch(accion)
  }
}
