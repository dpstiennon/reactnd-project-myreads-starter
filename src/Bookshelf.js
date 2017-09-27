/**
 * Created by davidstiennon on 9/23/17.
 */
import React, {Component} from 'react';
import Book from './Book'

class Bookshelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map(book => (
                            <Book key={book.id}
                                book={book}
                                moveBook={this.props.moveBook}>
                            </Book>
                        ))}

                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf;