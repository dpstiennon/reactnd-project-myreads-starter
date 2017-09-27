import React from 'react'
//import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";
import {bookData} from './BookData';


class BooksApp extends React.Component {
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
        return (
            <div className="app">
                <Route path="/search" render={() => (
                    <SearchPage bookData={this.state.bookData}
                                moveBook={this.moveBook}/>
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
