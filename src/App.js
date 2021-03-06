import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {Navbar, PopularList, TrendingList, LatestList, TopRatedList, 
          WatchList, WatchedList, SearchList, MoviePage, 
            SearchForm, Logo, MobileNav} from "./components"
import {GlobalContextProvider} from "./components/context"

function App() {
  return (
    <GlobalContextProvider>
    <div className="App">
      <Router>
        <Logo />
        <Navbar/>
        <SearchForm/>
        <MobileNav />
        <i className="fas fa-film fa-5x"></i>
        <div className="overall-container">
          <div className="outer-container">
            <div className="inner-container">
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
              <Route  path="/toprated">
                <TopRatedList/>
              </Route>
              <Route  path="/watchlist">
                <WatchList/>
              </Route>
              <Route  path="/watched">
                <WatchedList/>
              </Route>
              <Route  path="/search">
                <SearchList/>
              </Route>
              <Route  path="/movies/:id" children={<MoviePage />} />  
            </Switch>
            </div>
            </div>
          </div>
      </Router>
    </div>
    </GlobalContextProvider>
  );
}

export default App;
