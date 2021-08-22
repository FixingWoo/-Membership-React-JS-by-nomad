import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Header from 'Components/Header';
import Home from 'Routes/Home';
import TV from 'Routes/TV';
import Detail from 'Routes/Detail';
import Search from 'Routes/Search';

export default () => {
    return (
        <Router>
            <>
                <Header />
                <Switch>
                    <Route path="/" exact component={ Home } />
                    <Route path="/tv" component={ TV } />
                    <Route path="/detail" component={ Detail } />
                    <Route path="/search" component={ Search } />
                    <Redirect from="*" to="/" />
                </Switch>
            </>
        </Router>
    )
};
