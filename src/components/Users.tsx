import * as React from 'react';
import { routeNode } from 'react-router5';
import { Link } from 'react-router5';

function Users(props) {

    return (
        <div>
            Users page.
        </div>
    );
}

export default routeNode('users')(Users);
