import * as React from 'react';
import { routeNode } from 'react-router5';
import Users from "../Users";
import EditUsers from "../EditUsers";
import ProductDetail from "../ProductDetail";
import ProductForm from "../ProductForm";
function Routes(props) {
    const { route } = props;
    const segment = (route && route.name) ? route.name : null;
    switch (segment) {
        case 'users':
            return <Users />;
        case 'users.edit':
            return <EditUsers />;
        case 'products':
            return <ProductDetail />;
        case 'products.edit':
            return <ProductForm />;
        default:
            return <div>Not found</div>
    }
}

export default routeNode('')(Routes);
