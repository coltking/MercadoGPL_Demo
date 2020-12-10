import { createStore, applyMiddleware } from 'redux'
import './rootReducer'
import thunk from 'redux-thunk'
import rootReducers from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const devTools = process.env.NODE_ENV !== "production" ? applyMiddleware(thunk) : composeWithDevTools(applyMiddleware(thunk));

const store = createStore(
    rootReducers,
    devTools
)
export default store;
