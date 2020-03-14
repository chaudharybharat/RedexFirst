import {createStore} from 'redux';
import changeNameReducers from './app/reducers/nameChangeReducer'


// const rootReducer = combineReducers({
//     name: changeNameReducers
//   });
  
//   const configureStore = () => {
//     return createStore(rootReducer);
//   }

const store=createStore(changeNameReducers)

export default store;