// CLASS COMPONENT
// import React, { Component } from 'react';

// class App extends Component{
//   render(){
//     return <p>Hello World!</p>
//   }
// }

// export default App;


// FUNCTIONAL COMPONENT
import React from 'react';

const App = ()=> {
  const name = 'yoddi';
  return (
    <div>
      <p>Hello, {name}!</p>
      <p>this is your App.</p>
    </div>
  )
}

export default App;