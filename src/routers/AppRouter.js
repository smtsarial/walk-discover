import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import snow from "../components/snow"
import rainy from "../components/rainy"
import forest from "../components/forest"
import train from "../components/train"
import newyork from "../components/newyork"
import App from "../App"
import NotFoundPage from "../components/NotFoundPage"

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={App} exact={true} />
          <Route path="/snow" component={snow} />
          <Route path="/rainy" component={rainy} />
          <Route path="/forest" component={forest} />       
          <Route path="/train" component={train} />
          <Route path="/new-york" component={newyork} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );

export default AppRouter;