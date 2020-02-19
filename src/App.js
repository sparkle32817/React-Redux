import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './Footer';

function App() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
