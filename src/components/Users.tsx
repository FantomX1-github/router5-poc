import * as React from 'react';
import { routeNode } from 'react-router5';
import { Link } from 'react-router5';

function Users(props) {

    return (
        <div>
            <Link routeName='products' routeOptions={{reload: true}}>Home</Link>
        </div>
    );
}

export default routeNode('users')(Users);
