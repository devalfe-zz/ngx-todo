import { toggleAllTodoAction } from './todo.actions';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent implements OnInit {

  completado: boolean = false

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  toggleAll() {
    this.completado = !this.completado

    const accion = new toggleAllTodoAction(this.completado)
    this.store.dispatch(accion)

  }
}
