import React from 'react';
import {Provider} from 'react-redux';

import store from './store';
import PostForm from './components/PostForm.component';
import Posts from './components/Posts.component';

import './App.css';

// console.log(Provider);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
