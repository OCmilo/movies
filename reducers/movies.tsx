import type { Movie } from '../api/types'

interface Action {
  type: string
  payload: any
}

enum actions {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

const initialState: Movie[] = []

const moviesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.ADD:
      const isMovieInFavorites = state.some(
        (movie) => movie.id === action.payload.id
      )
      return isMovieInFavorites ? state : [...state, action.payload]
    case actions.REMOVE:
      return state.filter((movie) => movie.id !== action.payload)
    default:
      return state
  }
}

const addAction = (newMovieItem: Movie) => ({
  type: actions.ADD,
  payload: newMovieItem,
})

const removeAction = (id: number) => ({
  type: actions.REMOVE,
  payload: id,
})

export { moviesReducer as default, initialState, addAction, removeAction }
