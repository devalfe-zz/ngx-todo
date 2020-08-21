import { toggleTodoAction, editarTodoAction, borrarTodoAction } from './../todo.actions';
import { AppState } from './../../app.reducers';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: [
  ]
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo
  @ViewChild('txt') txt: ElementRef

  chkField: FormControl
  txtInput: FormControl

  editando: boolean
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

    this.chkField = new FormControl(this.todo.completado)
    this.txtInput = new FormControl(this.todo.texto, Validators.required)
    this.chkField.valueChanges
      .subscribe(() => {
        const accion = new toggleTodoAction(this.todo.id)
        this.store.dispatch(accion)
      })
  }

  editar() {
    this.editando = true
    setTimeout(() => {
      this.txt.nativeElement.select()
    }, 1);
  }

  terminarEdicion() {
    this.editando = false
    if (this.txtInput.invalid) {
      return
    }
    if (this.txtInput.value === this.todo.texto) {
      return
    }
    const accion = new editarTodoAction(this.todo.id, this.txtInput.value)
    this.store.dispatch(accion)

  }

  borrarTodo() {
    const accion = new borrarTodoAction(this.todo.id)
    this.store.dispatch(accion)
  }
}
