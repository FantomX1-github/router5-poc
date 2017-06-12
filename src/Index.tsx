import * as React from "react";
import * as ReactDom from "react-dom";
import {RouterProvider} from "react-router5";
import configureRouter from "./Routes/configureRouter";
import App from "./App";

const router = configureRouter(true);
const app = <RouterProvider router={router}><App /></RouterProvider>;

router.start();
ReactDom.render(app, document.getElementById("app"));
