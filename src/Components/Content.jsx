import React, {Component} from 'react';
import "../App.css";

// class Content extends Component {
//     render() {
//         return (
//             <div className="App-content">
//                 <h1>This is Content</h1>
//             </div>
//         )
//     }
// }

function Content() {
    return(
        <div className="App-content">
            <p>This is Content with Functional Component</p>

            <button onClick={() => (alert("Hello World!"))}>Hit me!</button>
        </div>
    )
}

export default Content;