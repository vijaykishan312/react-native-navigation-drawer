import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../Redux/reducer';
import rootSaga from '../Redux/saga/rootSaga';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, {}, compose(applyMiddleware(
        // logger,
        sagaMiddleware,)));
    sagaMiddleware.run(rootSaga);
    return store;
}
