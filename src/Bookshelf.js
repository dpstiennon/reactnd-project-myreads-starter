/**
 * Created by davidstiennon on 9/23/17.
 */
import React, {Component} from 'react';
import BookshelfChanger from './BookshelfChanger'

class Bookshelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map(book => (
                            <li key={book.key}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{
                                            width: 128,
                                            height: 193,
                                            backgroundImage: `url("${book.url}")`
                                        }}></div>
                                        <BookshelfChanger
                                            moveBook={this.props.moveBook}
                                            book={book}
                                        />
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.author}</div>
                                </div>
                            </li>
                        ))}

                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf;