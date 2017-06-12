import { routeNode } from 'react-router5';
import * as React from "react";
import Routes from "./Routes/Routes";
export class App extends React.Component<any, any> {
    public render(): JSX.Element {
        return (<div>
            <Routes />
        </div>);
    }
}
export default routeNode('')(App);
