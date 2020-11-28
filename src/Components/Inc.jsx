// CLASS COMPONENT
// import React, {Component} from 'react';

// class Inc extends Component{
    
//     constructor() {
//         super()
//         this.state = {
//             counter: 0
//         }
//     }
    
//     handleInc = () => {
//         this.setState({
//             counter: this.state.counter + 1
//         })
//     }

//     handleDec = () => {
//         this.setState({
//             counter: this.state.counter - 1
//         })
//     }

//     render() {
//         return(
//             <div className="App-content">
//                 <p>{this.state.counter}</p>

//                 <button onClick={this.handleInc}>+</button>
//                 <button onClick={this.handleDec}>-</button>
//             </div>
//         )
//     }
// }

// FUNCTIONAL COMPONENT
import React, {Component, useState} from 'react';

function Inc(){

    const [counter, setCounter] = useState(0);

    const handleInc = () => {
        setCounter(counter+1);
    }

    const handleDec = () => {
        setCounter(counter-1);
    }

    return(
        <div className="App-content">
            <p>{counter}</p>

            <button onClick={handleInc}>+</button>

            <button onClick={handleDec}>-</button>
        </div>
    )
}

export default Inc;