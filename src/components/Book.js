import React from 'react'
import '../Styles.css';

class Book extends React.Component {

    render() {
        const {book, author, image} = this.props.details

    return (
        <li className="Book">
            <div className="image-container">
                <img className="image" src={image} alt="book_cover"/>
            </div>

            <div className="book-details">
                <h3 className="book-name">
                    {book}
                </h3>
                <p>{author}</p>
            </div>
        </li>
    );
    }

    
}

export default Book;
