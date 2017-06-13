import * as React from 'react';
import Nav from './Nav';
import Main from './Main';

export default function App(props) {
    return (
        <div>
            <aside>
                <Nav />
            </aside>

            <main>
                <Main />
            </main>
        </div>
    );
}
