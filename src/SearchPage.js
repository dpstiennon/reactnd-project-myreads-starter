import React, {Component} from 'react'
import {Link} from "react-router-dom";
import * as Api from './BooksAPI';
import Book from "./Book";
import {debounce} from 'lodash'

class SearchPage extends Component{
    constructor(){
        super();
        this.state = {
            books: [],
            search: ''
        };
        this.fetchBooks = debounce(this.fetchBooks.bind(this), 200);
        this.searchChanged = this.searchChanged.bind(this);
    }

    fetchBooks(query){
        Api.search(query, 20).then(books => {
            books.forEach(book => book.shelf = this.getStatus(book))
            this.setState({books: books})
        })
    }


    getStatus(book){
        const bookData = this.props.bookData.find(b => b.id === book.id);
        return bookData ? bookData.shelf : 'none';
    }

    searchChanged(ev){
        const query = ev.target.value;
        this.setState({
            search: query
        });
        if(query.length){
            this.fetchBooks(query);
        }
    }
    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               autoFocus
                               value={this.state.search}
                               onChange={this.searchChanged.bind(this)}
                               placeholder="Search by title or author"/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.map(book => (
                            <Book key={book.id}
                                  book={book}
                                  moveBook={this.props.moveBook}/>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchPage
