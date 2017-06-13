import * as React from 'react';
import { BaseLink, withRoute } from 'react-router5';

function Nav(props) {
    const { router } = props;

    return (
        <nav>
            <BaseLink style={{marginLeft: 10, marginRight: 10}} router={ router } routeName='users' routeOptions={{ reload: true }}>Users</BaseLink>
            <BaseLink style={{marginLeft: 10, marginRight: 10}} router={ router } routeName='users.edit'>Edit Users</BaseLink>
            <BaseLink style={{marginLeft: 10, marginRight: 10}} router={ router } routeName='products'>Products</BaseLink>
            <BaseLink style={{marginLeft: 10, marginRight: 10}} router={ router } routeName='products.edit'>Edit Products</BaseLink>
        </nav>
    );
}

export default withRoute(Nav);
