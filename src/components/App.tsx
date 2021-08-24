import { defaultCipherList } from 'constants';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../src/state'; 
import RepoList from './RepoList';

const App = () => {
  return (
    <Provider store = {store}>
      <div>
        <h1> Search for a package </h1>
        <RepoList />
      </div>
    </Provider>
  );
}

export default App; 