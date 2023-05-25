import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {Provider,} from "react-redux";
import {store} from "./store/redux";

const AppContainer =()=>{



    return(
        <React.StrictMode>
            <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
                </Provider>
        </React.StrictMode>
    )

}
export default AppContainer