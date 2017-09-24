import React, {Component} from "react";
import {Link} from "react-router-dom";
import Bookshelf from './Bookshelf';
import {bookData} from './BookData';

class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            bookData: bookData
        }
        this.moveBook = this.moveBook.bind(this);
    }

    moveBook(book, newStatus) {
        let newData = [...this.state.bookData];
        newData.find(b => b.key === book.key).status = newStatus;
        this.setState({
            bookData: newData
        })
    }


    render() {
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf
                            title='Currently Reading'
                            moveBook={this.moveBook}
                            books={this.state.bookData.filter(b => b.status === 'currentlyReading')}
                        />
                        <Bookshelf
                            title='Want To Read'
                            moveBook={this.moveBook}
                            books={this.state.bookData.filter(b => b.status === 'wantToRead')}
                        />
                        <Bookshelf
                            title="Already Read"
                            moveBook={this.moveBook}
                            books={this.state.bookData.filter(b => b.status === 'read')}
                        />

                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default MainPage