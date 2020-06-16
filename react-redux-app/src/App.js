import React from 'react';
import { Provider } from 'react-redux';
import Comment from "./Comment/Comment";
import store from "./store";
import Form from "./Form/Form";

function App() {
  return (
    <Provider store = {store}>
      <Comment />
      <Form />
    </Provider>
  );
}

export default App;
