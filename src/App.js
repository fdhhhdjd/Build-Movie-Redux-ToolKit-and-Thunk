import React from "react";
import "./App.scss";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import {
  Footer,
  Header,
  Home,
  MovieDetail,
  PageNotFound,
} from "./Import/Index";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie:imdID" component={MovieDetail} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
