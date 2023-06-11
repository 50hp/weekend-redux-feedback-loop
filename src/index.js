import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Note refactor reducers into one?
const pageOneReducer = (state = String, action) => {
    if (action.type ==="PAGE_ONE") {
        return action.payload;
    }else if (action.type === "RESET") {
        return state = String;
    }
    return state;
};

const pageTwoReducer = (state = String, action) => {
    if (action.type ==="PAGE_TWO") {
        return action.payload;
    }else if (action.type === "RESET") {
        return state = String;
    }
    return state;
};

const pageThreeReducer = (state = String, action) => {
    if (action.type ==="PAGE_THREE") {
        return action.payload;
    }else if (action.type === "RESET") {
        return state = String;
    }
    return state;
};

const pageFourReducer = (state = String, action) => {
    if (action.type === "PAGE_FOUR") {
        return action.payload;
    }else if (action.type === "RESET") {
        return state = String;
    }
    return state;
};

const storeInstance = createStore(
    combineReducers({
        pageOneReducer,
        pageTwoReducer,
        pageThreeReducer,
        pageFourReducer,
    }),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
