import * as React from 'react';
import { routeNode } from 'react-router5';
import Users from "../Users";
import EditUsers from "../EditUsers";
function UserRoutes(props) {
    const { route } = props;
    const segment = (route && route.name) ? route.name : null;
    switch (segment) {
        case '':
            return <Users />;
        case 'edit':
            return <EditUsers />;
        default:
            return <div>Not found</div>
    }
}

export default routeNode('users')(UserRoutes);
