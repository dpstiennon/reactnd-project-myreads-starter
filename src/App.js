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
        book.shelf = status;
        let newData = [...this.state.bookData.filter(b => b.id !== book.id)];
        this.setState({
            bookData: [...newData, book]
        });
        //Update the local data first for fast rendering
        BooksAPI.update(book, status);
    }

    componentDidMount(){
        BooksAPI.getAll().then(data => {
            this.setState({
                bookData: data
            });
        });
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
