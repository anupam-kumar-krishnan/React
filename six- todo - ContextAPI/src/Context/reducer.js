import { ADD_TODO, REMOVE_TODO } from "./actions.types";

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]; //payload = information here it is string
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload); //filter = callback method
      //remove todo based on ID
      //how that ID gonna be
      //use node packages 
      //and some packages names as
      //uuid : unique id
    default:
      return state;
  }
};
