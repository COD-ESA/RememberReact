import React from 'react';
import './App.css';
import Menu from './components/menu/Menu'

function App() {
  // log(Users().forEach( el => log(el.name)));
  // const compose = (...fns) => arg => fns.reduce( (composed, f) => f(composed), arg);
  // const first = (msg) => {log('first = ',msg); return msg + '!!!'};
  // const second = (msg) => log('second = ',msg);
  // const both = compose(first, second);
  // both('ggg');
  return (
    <div className="App">
      <header className="App-header">
        <Menu title="Guest list"/>
      </header>
    </div>
  );
}

export default App;
