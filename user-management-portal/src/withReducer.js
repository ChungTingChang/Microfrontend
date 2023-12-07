import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { UserReducer } from './common/store';

const reducer = combineReducers({
	UserReducer,
});

const store = configureStore({
	reducer,
});

const withReducer = (Component) => (
	<Provider store={store}>
		<Component.children {...Component.props} />
	</Provider>
);

export default withReducer;
