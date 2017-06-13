import * as React from 'react';
import { routeNode } from 'react-router5';
import Users from './Users';
import Products from './Products';

const components = {
    'users':   <Users />,
    'products': <Products />
};

function Main(props) {
    const { route } = props;
    const segment = route.name.split('.')[0];

    return components[segment];
}

export default routeNode('')(Main);