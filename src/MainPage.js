import React, {Component} from "react";
import {Link} from "react-router-dom";
import Bookshelf from './Bookshelf';


class MainPage extends Component {

    render() {
        const props = this.props;
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf
                            title='Currently Reading'
                            moveBook={props.moveBook}
                            books={props.bookData.filter(b => b.status === 'currentlyReading')}
                        />
                        <Bookshelf
                            title='Want To Read'
                            moveBook={props.moveBook}
                            books={props.bookData.filter(b => b.status === 'wantToRead')}
                        />
                        <Bookshelf
                            title="Already Read"
                            moveBook={props.moveBook}
                            books={props.bookData.filter(b => b.status === 'read')}
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