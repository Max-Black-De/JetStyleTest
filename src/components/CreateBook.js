import React from 'react'

class CreateBook extends React.Component {

    
    newElementAuthor = React.createRef();
    newElementNameOfBook = React.createRef();
    newElementImageOfBook = React.createRef();

    createCard = (event) => {
        event.preventDefault();
        const book =  {
            author: this.newElementAuthor.current.value,
            book: this.newElementNameOfBook.current.value,
            image: this.newElementImageOfBook.files[0].name
        };
        debugger
        this.props.addBook(book);
        event.currentTarget.reset();
    }

    // addBookCover = (e) => {
    //     console.log('Work')
    //     var reader = new FileReader();
    //     var name = e.target.files[0].name;
    //     reader.onload = () => {
    //         if (reader.result && localStorage) {
    //             localStorage.setItem(name, reader.result);
    //         } else {
    //             alert();
    //         }
    //     };
    //     reader.readAsDataURL(e.target.files[0]);
    //     // this.props.showImages(name)
    // }


        render() {
        
        return (
            <form className="input"
            onSubmit={this.createCard}
            >
                    
                    <div className="author">
                        <input
                        name="author"
                        type="text"
                        placeholder="Автор"
                        autoComplete="off"
                        className="inputAuthor"
                        ref={this.newElementAuthor}></input>
                    </div>
    
                    <div className='name'>
                        <input
                        name="nameOfBook"
                        type="text"
                        placeholder="Название"
                        autoComplete="off"
                        className="inputNameOfBook"
                        ref={this.newElementNameOfBook}></input>
                    </div>
    
                    <div className="img">
                        <input 
                        name="image"
                        type="file"
                        onChange={this.createCard}
                        className="inputImg"
                        placeholder="Обложка"
                        ref={this.newElementImageOfBook}
                        ></input>
                    </div>
    
                    <div className="button">
                        <button
                        // onClick={this.createCard}
                        type="submit">Сохранить</button>
                        {/* <button
                        >Сохранить iMG</button> */}
                    </div>
            </form>
        );
    }

}

export default CreateBook;
