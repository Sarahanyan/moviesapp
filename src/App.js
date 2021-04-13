import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {Navbar, PopularList, TrendingList, LatestList, WatchList, WatchedList} from "./components"
import {GlobalContextProvider} from "./components/context/context.js"

console.log(process.env.REACT_APP_TMDB_API_KEY);
function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <LatestList />
          </Route>
          <Route path="/trending">
            <TrendingList/>
          </Route>
          <Route  path="/popular">
            <PopularList/>
          </Route>
          <Route  path="/watchlist">
            <WatchList/>
          </Route>
          <Route  path="/watched">
            <WatchedList/>
          </Route>
        </Switch>
      </Router>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
