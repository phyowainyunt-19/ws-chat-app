import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Join, Chat } from "./components";

const App = () => (
  <Router>
    {/* For rrd latest version */}
    {/* <Route path="/" element={<Join />} />
    <Route path="/chat" element={<Chat />} /> */}
    <Route path="/" exact component={Join} />
    <Route path="/chat" component={Chat} />
  </Router>
);

export default App;
