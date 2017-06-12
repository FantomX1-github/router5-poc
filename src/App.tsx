import * as React from "react";
import ProductRoutes from "./Routes/ProductRoutes";
import UserRoutes from "./Routes/UserRoutes";
export default class App extends React.Component<any, any> {
    public render(): JSX.Element {
        return (<div>
            <ProductRoutes />
            <UserRoutes />
        </div>);
    }
}
