import React from 'react';
import Book from "./book";
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        var statuses = [
            {key: "currentlyReading", value: "Currently Reading"},
            {key: "wantToRead", value: "Want to Read"},
            {key: "read", value: "Read"}
        ];
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                    <hr/>
                    <div className="list-books-content">
                        {
                            /* I'll try to work smarter , instead of writing this div three times , I'll write it only onetime */
                            statuses.map(statue => (

                            <div className="bookshelf">
                                <h2 className="bookshelf-title">{statue.value}</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {
                                            /*filter the books based on shelf value
                                            iterate over book three times everytime  with new value */
                                            this.props.books.filter(
                                                book => book.shelf === statue.key
                                            ).map(book => (
                                                <li key={book.id}>
                                                    <Book book={book} shelf={statue.key} on_change={this.props.on_change}/>
                                                </li>
                                            ))
                                        }
                                    </ol>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
                <div className="open-search">
                    {/* adding link to go to search page , the link is like a tag but implemented by react team with additional  functionalities */}
                    <Link to="/search">
                        <button type="button">Add or Search for new book</button>
                    </Link>
                </div>
            </div>


        )

    }}
export default Home;