import React, { useState } from 'react'
import "../Styles.css"

let Editor = (props) => {

    const [ display, toogleDisplay ] = useState(false);


    const handleChange = event => {
        const updatedBook = {
            ...props.book,
            [event.currentTarget.name]: event.currentTarget.value
        };
        props.updateLibrary(props.index, updatedBook);
    }

    const handleHideEditor = () => {
        toogleDisplay(!display)
    }

    return (
        <div className="editor-container">
            {display ? <div className="editor">
                <input
                    onChange={handleChange}
                    value={props.book.author}
                    type="text"
                    name="author"></input>

                <input
                    onChange={handleChange}
                    value={props.book.book}
                    type="text"
                    name="book"></input>

            </div> : null}

            <div className="btn-container">
                <button
                    onClick={() => props.deleteBook(props.index)}
                    className="btnDelete">удалить &times;</button>
                <button
                    onClick={handleHideEditor}
                    className="btnEdit">Редактировать</button>

            </div>
        </div>
    )
}

export default Editor
