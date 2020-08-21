import * as actionsFiltro from "./filter.actions";


const estadoInicial: actionsFiltro.filtrosValidos = "todos"

export function filterReducer(
  state = estadoInicial,
  action: actionsFiltro.acciones): actionsFiltro.filtrosValidos {
  switch (action.type) {
    case actionsFiltro.SET_FILTRO:
      return action.filtro

    default:
      return state
  }
}
