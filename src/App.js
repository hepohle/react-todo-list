import React, {Component} from "react";
import uuid from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoImput from "./components/TodoImput";
import TodoList from "./components/TodoList";
//setup
function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <TodoImput />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
