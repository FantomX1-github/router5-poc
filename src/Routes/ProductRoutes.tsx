import * as React from 'react';
import { routeNode } from 'react-router5';
import ProductDetail from "../ProductDetail";
import ProductForm from "../ProductForm";
function ProductRoutes(props) {
    const { route } = props;
    const segment = (route && route.name) ? route.name : null;
    switch (segment) {
        case 'products':
            return <ProductDetail />;
        case 'products.edit':
            return <ProductForm />;
        default:
            return <div>Not found</div>
    }
}

export default routeNode('')(ProductRoutes);
