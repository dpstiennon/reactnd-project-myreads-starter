/**
 * Created by davidstiennon on 9/24/17.
 */
import React, {Component} from 'react'

class BookshelfChanger extends Component {
    render(){
        return (
            <div className="book-shelf-changer">
                <select
                    value={this.props.book.status}
                    onChange={e => this.props.moveBook(this.props.book, e.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookshelfChanger
