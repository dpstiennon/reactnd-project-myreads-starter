import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";


class BooksApp extends React.Component {
    constructor() {
        super();
        this.state = {
            bookData: []
        };
        this.moveBook = this.moveBook.bind(this);
    }


    moveBook(book, status) {
        book.status = status;
        let newData = [...this.state.bookData.filter(b => b.id !== book.id)];
        BooksAPI.update(book, status).then(res =>{
            debugger;
            this.setState({
                bookData: [...newData, book]
            })
        })
    }

    componentDidMount(){
        BooksAPI.getAll().then(data => {
            this.setState({
                bookData: data.map(book => this.parseBook(book))
            });
        });
    }

    parseBook(book){
        return {
            title: book.title,
            author: book.authors && book.authors.join(', '),
            url: book.imageLinks && book.imageLinks.thumbnail,
            id: book.id,
            status: book.shelf
        }
    }

    render() {
        return (
            <div className="app">
                <Route path="/search" render={() => (
                    <SearchPage bookData={this.state.bookData}
                                moveBook={this.moveBook} />
                )}/>

                <Route exact path="/" render={() => (
                    <MainPage bookData={this.state.bookData}
                              moveBook={this.moveBook}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
