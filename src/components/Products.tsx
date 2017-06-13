import * as React from 'react';
import { routeNode } from 'react-router5';
import { Link } from 'react-router5';

function Products(props) {

    return (
        <div>
            Products page
        </div>
    );
}

export default routeNode('products')(Products);
