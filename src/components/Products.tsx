import * as React from 'react';
import { routeNode } from 'react-router5';
import { Link } from 'react-router5';
import {Router} from "router5";

interface IState {
    model: string
    name: string
    dirty?: boolean;
}

class Products extends React.Component <any, IState> {
    protected router: Router;
    constructor(props){
        super(props);
        this.router = props.router;
        this.router.canDeactivate('products', () => {return this.canDeactivate.bind(this)})

        this.state = {
            model: '',
            name: '',
            dirty: false
        };
    }
    canDeactivate() {
        this.setState({dirty: false});
        let url = 'http://localhost:8080/save';
        url += (this.state.model !== '' || this.state.name !== '') ? '/dirty': '/';
        return fetch(url, {method: 'POST'})
        .then(res => res.json())
        .then((data) => {
            this.setState({dirty: !data.result});
            if(data.result){
                return data.result;
            }
            return Promise.reject({data: 'cannot deactivate'});
        });
    }

    render(){
        return (
            <form action="#">
                <input placeholder="model" type="text" value={this.state.model} onChange={(event) => {this.setState({model: event.target.value})}}/>
                <input placeholder="name" type="text" value={this.state.name} onChange={(event) => {this.setState({name: event.target.value})}}/>
                {this.state.dirty ? 'Please clear form': null}
            </form>
        )
    }
}
export default routeNode('products')(Products);
