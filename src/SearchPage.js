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
        this.parseBook = this.parseBook.bind(this);

    }
    fetchBooks(query){
        Api.search(query, 1000).then(books => {
            this.setState({books: books.map(b => this.parseBook(b))})
        })

    }

    parseBook(book){
        return {
            title: book.title,
            author: book.authors && book.authors.join(', '),
            url: book.imageLinks && book.imageLinks.thumbnail,
            key: book.industryIdentifiers[0].identifier,
            status: 'none'
        }
    }

    searchChanged(ev){
        const query = ev.target.value;
        this.setState({
            search: query
        });
        if(query.length > 3){
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
                               value={this.state.search}
                               onChange={this.searchChanged.bind(this)}
                               placeholder="Search by title or author"/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.map(book => (
                            <Book book={book} moveBook={() => null} key={book.key}/>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchPage
