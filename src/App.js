import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC8ukwodDCTQdAb2kA8pSIiDiODRx8Mx4s',
      authDomain: 'manager-2efd2.firebaseapp.com',
      databaseURL: 'https://manager-2efd2.firebaseio.com',
      projectId: 'manager-2efd2',
      storageBucket: 'manager-2efd2.appspot.com',
      messagingSenderId: '847485808045'
    };
  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
