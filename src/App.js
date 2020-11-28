// CLASS COMPONENT
import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Header/>
        <Content/>
      </div>
    )
  }
}

export default App;


// FUNCTIONAL COMPONENT
// import React from 'react';

// const App = ()=> {
//   const name = 'yoddi';
//   return (
//     <div>
//       <p>Hello, {name}!</p>
//       <p>this is your App.</p>
//     </div>
//   )
// }

// export default App;