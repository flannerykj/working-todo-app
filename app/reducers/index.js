//import { combineReducers } from 'redux'
import todoReducer from './todo';
import filterReducer from './filters';
import addModalReducer from './add-modal';

/*const todoApp = combineReducers({
  todos,
  visibilityFilter
})*/ 

export default todoApp = {
	todos: todoReducer, 
	filter: filterReducer,
	addModal: addModalReducer
}