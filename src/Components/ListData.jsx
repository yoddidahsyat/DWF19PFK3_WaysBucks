import React, {Component} from 'react';
import List from './List';
export default class ListData extends Component{
    render() {
        return(
            <div>
                <List Data="Yoddi" />
                <List Data="Dahsyat" />
                <List Data="Bootcamp" />
                <List Data="Dumbways" />
            </div>
        )
    }
}