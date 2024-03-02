// store/configureStore.js
import { createStore } from 'redux';
import accordionReducer from '../reducers/accordionReducer';

const store = createStore(accordionReducer);

export default store;
