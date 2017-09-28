/**
 * Created by davidstiennon on 9/24/17.
 */
import React, {Component} from 'react'

class Book extends Component {
    getUrl(book){
        return book.imageLinks && book.imageLinks.thumbnail;
    }

    getAuthor(book){
        return book.authors && book.authors.join(', ');
    }
    render() {
        const book = this.props.book;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url("${this.getUrl(book)}")`
                        }}></div>
                        <div className="book-shelf-changer">
                            <select
                                value={book.shelf}
                                onChange={e => this.props.moveBook(book, e.target.value)}>
                                <option value="" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{this.getAuthor(book)}</div>
                </div>
            </li>
        )
    }
}

export default Book
