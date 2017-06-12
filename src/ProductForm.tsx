import * as React from "react";
interface IState{
    email: string,
    password: string
}
export default class ProductForm extends React.Component<any, IState> {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    public handleSubmit()
    {
        console.log('submitted');
    }

    public render(): JSX.Element {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={(event) => {this.setState({email: event.target.value })}}/>
                <input type="password" onChange={(event) => {this.setState({password: event.target.value })}}/>
            </form>
        </div>);
    }
}
