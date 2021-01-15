import { combineReducers } from "redux";
     
const rootReducer = combineReducers({
  registration: registrationReducer,
  question: questionReducer,
  comments: commentReducer
});
 
export default rootReducer;
 
function registrationReducer(state = [], action) {
  switch (action.type) {
    case "ADD_NEW_USER":
      console.log("reducer file");
      return [...state, action.user];
    case "SIGN_IN":
      console.log("inside sign in reducer");
      return [...state, action.user];
    default:
      return state;
  }
}
 
function questionReducer(state = [], action) {
  switch (action.type) {
    case "GET_A_QUESTION":
      console.log("reducer file question");
      return {...state, question: [action.question]}

    default:
      return state;
  }
}

function commentReducer(state = [], action) {
  switch (action.type) {
    case "SAVE_COMMENT":
      console.log("reducer file comment");
      return {...state, comment: [action.comments]}

    default:
      return state;
  }
}