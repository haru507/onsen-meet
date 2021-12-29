import React from 'react';
import {Route, Switch} from "react-router";
import { SignUp, SignIn, StoreSearch, Home } from "./templates";
// import Auth from "./Auth";

const Router: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/signin" component={SignIn} />
            {/* <Route exact path="/signin/reset" component={Reset} /> */}
            <Route exact path="/signup" component={SignUp} />

            <Route exact path="/" component={Home} />
            <Route exact path="/storesearch" component={StoreSearch} />

            {/* <Auth> */}
                {/* <Route exact path="(/)?" component={ProductList} /> */}
            {/* </Auth> */}
        </Switch>
    );
};

export default Router;