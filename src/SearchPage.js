import React, {Component} from 'react'
import {Link} from "react-router-dom";
import * as Api from './BooksAPI';
import Book from "./Book";

class SearchPage extends Component{
    constructor(){
        super();
        this.state = {
            books: [],
            search: ''
        };
        this.fetchBooks = this.fetchBooks.bind(this);
        this.searchChanged = this.searchChanged.bind(this);
        this.parseBook = this.parseBook.bind(this);

    }
    fetchBooks(query){
        Api.search(query, 20).then(books => {
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
                        {/*
                         NOTES: The search from BooksAPI is limited to a particular set of search terms.
                         You can find these search terms here:
                         https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                         However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                         you don't find a specific author or title. Every search is limited by search terms.
                         */}
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
