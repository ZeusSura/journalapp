import { applyMiddleware, combineReducers, createStore,compose } from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from 'redux-thunk';


//Para agregar mas de un middleware
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
//En caso de tener mas reducers se agregan al objecto
const reducers = combineReducers({
  auth: authReducer,
});

//Crea el store de reducers
export const store = createStore(
  reducers,
  composeEnhancers(

    applyMiddleware(thunk)
  )
);
