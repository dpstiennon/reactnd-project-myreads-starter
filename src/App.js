import React from 'react'
//import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route, Link} from 'react-router-dom'
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";


class BooksApp extends React.Component {
  state = { }

  render() {
      return (
          <div className="app">
              <Route path="/search" render={() => <SearchPage/>}/>

              <Route exact path="/" render={() => <MainPage/>}/>
          </div>
      )
  }
}

export default BooksApp
