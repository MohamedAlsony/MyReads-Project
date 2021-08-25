import React from 'react';

class Book extends React.Component {

  render() {
    // variable to store thumbnail URL
    let thumbnail = "";
    // check wheather this book have imageLinks or not
    if ("imageLinks" in this.props.book){
      // check wheather this imageLinks have thumbnail or not
      if ("thumbnail" in this.props.book.imageLinks){
thumbnail = this.props.book.imageLinks.thumbnail;
      }
    }
    return (
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${thumbnail}")` }}></div>
            <div className="book-shelf-changer">

              <select onChange={(ev) =>{this.props.on_change(this.props.book , ev.target.value)}} value={this.props.shelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          {/* printing book title */}
          <div className="book-title">{this.props.book.title}</div>
            {/* printing book authors */}
            <div className="book-authors">{this.props.book.authors}</div>
        </div>

    )
  }

}
export default Book;