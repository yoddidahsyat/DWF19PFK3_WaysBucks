// CLASS COMPONENT
import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';

// CLASS COMPONENT
// class App extends Component{
//   render(){
//     return (
//       <div className="App">
//         <Header/>
//         <Content/>
//       </div>
//     )
//   }
// }

// export default App;


// FUNCTIONAL COMPONENT

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
    </div>
  )
}

export default App;