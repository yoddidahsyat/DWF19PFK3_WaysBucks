import React, {Component} from 'react';

export default class List extends Component{
    render() {
        return(
            <div>
                <p>{this.props.Data}</p>
            </div>
        )
    }
}