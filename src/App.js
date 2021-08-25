import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import Home from "./Components/home";
import Search from "./Components/search";

class BooksApp extends React.Component {
    state = {books:[]};
        componentDidMount() {
      BooksAPI.getAll().then((items) => {

              this.setState({ books: items })
          }
      )

  }
    on_change = (b,s) => {
      BooksAPI.update(b,s).then();
        BooksAPI.getAll().then((items) => {

                this.setState({ books: items })
            }
        )
    }

    render() {
      return (
          <div>
              <Route exact path="/" render={() => (
                  <Home

                      books={this.state.books}
                      on_change={this.on_change}
                  />
              )}/>
              <Route exact path="/search" render={() => (
                  <Search
                      books={this.state.books}
                      on_change={this.on_change}

                  />
              )}/>
          </div>
      )
}


}

export default BooksApp;

