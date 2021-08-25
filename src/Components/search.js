import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from "./book";


class Search extends Component {
    state = {
        target: '',
        target_books: []
    }

    updateTarget = (target) => {
        let trim_target = target.replace(/^\s+/, '');

        this.setState({target: trim_target});

        this.searching(trim_target);
    }

    searching = (target) => {
        if (target.length !==0) {
            BooksAPI.search(target).then((books) => {
                if (books.error) {
                    this.setState({target_books : [] });
                } else {
                    this.setState({ target_books: books });
                }
            }
            )
        } else {
            this.setState ({ target_books: [] });
        }
    }

    render () {
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author name" value={this.state.target}
                        onChange={(e) => this.updateTarget(e.target.value)}
                        />
                    </div>
                </div>
            <div className="search-books-results">
              <ol className="books-grid">

                    {   
                        this.state.target_books.map(target_book => {
                            let shelf_value = "none";
                            this.props.books.forEach(book => {
                                if (book.id !== target_book.id) {
                                    target_book.shelf = "none";
                                } else {
                                    shelf_value = book.shelf;
                                }
                            })
                            
                            return(
                                <li key={target_book.id}>
                                <Book 
                                    book={target_book}
                                    on_change={this.props.on_change}
                                    shelf={shelf_value}
                                />
                            </li>
                            )
                        }
                        )
                    }
              </ol>
            </div>
            </div>
        );
    }
}

export default Search;