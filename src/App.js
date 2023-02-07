import React, { useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Exchanges,
  Homepage,
  News,
  Cryptocurrencies,
  CryptoDetails,
  Navbar,
} from "./components";
import "./App.css";

const App = () => (
  useEffect(() => {
    document.title = "CryptoStalker : Stalk the Right Way";
  }),
  (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Copyright © 2022
            <br />
            <Link to="/">CryptoStalker Inc. </Link>
            <br />
            <Space>
              <Link to="/">Home</Link>
              {/* <Link to="/exchanges">Exchanges</Link> */}
              <Link to="/news">News</Link>
            </Space>
            <br />
            All Rights Reserved.
            <br />
            Project By Payal And Sameer
          </Typography.Title>
          <Space></Space>
        </div>
      </div>
    </div>
  )
);

export default App;
