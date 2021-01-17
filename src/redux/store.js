import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducerContacts from './reducers';

const store = createStore(reducerContacts, composeWithDevTools());

export default store;
