import * as React from 'react';
import { BaseLink, withRoute } from 'react-router5';

export default class Nav extends React.Component<any, any> {
    protected router: any;
    constructor(props){
        super(props);
        this.router = props.router;
    }
    public render() {
        return (
            <nav>
                <BaseLink router={ this.router } routeName='users' routeOptions={{ reload: true }}>Users</BaseLink>
                <BaseLink router={ this.router } routeName='users.edit'>Edit Users</BaseLink>
                <BaseLink router={ this.router } routeName='products'>Products</BaseLink>
                <BaseLink router={ this.router } routeName='products.edit'>Edit Products</BaseLink>
            </nav>
        );
    }
}
// export default withRoute(Nav);
