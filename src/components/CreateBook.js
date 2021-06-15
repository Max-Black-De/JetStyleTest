import React from 'react'

class CreateBook extends React.Component {

    
    newElementAuthor = React.createRef();
    newElementNameOfBook = React.createRef();
    // newElementStatusOfBook = React.createRef();
    newElementImageOfBook = React.createRef();

    createCard = event => {
        event.preventDefault();
        const book ={
            author: this.newElementAuthor.current.value,
            book: this.newElementNameOfBook.current.value,
            status: "visible",
            image: this.newElementImageOfBook.current.value
        };
        this.props.addBook(book);
        event.currentTarget.reset();
    }

    // addBookCover = (e) => {
    //     if (e.target.files.length) {
    //         this.props.saveCover(e.target.files[0]);
    //     }
    // }


    addBookCover = (even) => {
        var reader = new FileReader();
        var name = even.target.files[0].name;
        reader.addEventListener("load", function () {
            if (this.result && localStorage) {
                localStorage.setItem(name, this.result);
            } else {
                alert();
            }
        });
        reader.readAsDataURL(even.target.files[0]);
    }

    showImages =() => {
        for (let i = 0; i < localStorage.length; i++) {
            let res = localStorage.getItem(localStorage.key(i));
            var image = new Image();
            image.src = res;
    }
    }


        render() {
        
        return (
            <form className="input" onSubmit={this.createCard}>
                    
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
                        autoComplete="off"
                        onChange={this.addBookCover}
                        className="inputImg"
                        placeholder="Обложка"
                        ref={this.newElementImageOfBook}></input>
                    </div>
    
                    <div className="button">
                        <button
                        type="submit"
                        onClick={this.showImages}>Сохранить</button>
                    </div>
            </form>
        );
    }

}

export default CreateBook;
