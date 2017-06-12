import * as React from "react";
import { Link, routeNode } from 'react-router5'

export default class Users extends React.Component<any, any> {

    public render(): JSX.Element {
        return (<div>
            <Link routeName='users.edit'>Home</Link>
        </div>);
    }
}
