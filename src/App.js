import React from 'react';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Switch>
      <Route exact={true} path="/">
        This Is Home Page
      </Route>

      <Route exact={true} path="/starred">
        This Is Starred
      </Route>

      <Route>This Is 404 Page</Route>
    </Switch>
  );
}

export default App;
