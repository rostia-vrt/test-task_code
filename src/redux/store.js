import {combineReducers, createStore} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import {
    announcementReducer
} from './reducers/index';
const reducer = combineReducers({
    form: reduxFormReducer,
    announcement: announcementReducer
});
const store = createStore(reducer);

export default store;