import * as React from "react";
interface IState {
    email: string;
    password: string;
}
export default class EditUsers extends React.Component<any, IState> {
    public handleSubmit() {
        console.log('handle submit');
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
