import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const pageOneReducer = (state = 0, action) => {
    if (action.type ==="PAGE_ONE") {
        return action.payload;
    }else if (action.type === "RESET") {
        return state = 0;
    }
    return state;
};

const pageTwoReducer = (state = 0, action) => {
    if (action.type ==="PAGE_TWO") {
        return action.payload;
    }else if (action.type === "RESET") {
        return state = 0;
    }
    return state;
};

const pageThreeReducer = (state = 0, action) => {
    if (action.type ==="PAGE_THREE") {
        return action.payload;
    }else if (action.type === "RESET") {
        return state = 0;
    }
    return state;
};

const pageFourReducer = (state = '', action) => {
    if (action.type === "PAGE_FOUR") {
        return action.payload;
    }else if (action.type === "RESET") {
        return state = '';
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
