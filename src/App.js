import './Styles.css';
import React from 'react'
import Editor from './components/Editor';
import AdminMenu from './components/AdminMenu';
import stateLibrary from './components/stateLibrary';
import Book from './components/Book';


class App extends React.Component {

  state = {
    library: {}
  };

  componentDidMount() {
    const library = 'Library';
    const localStorageRef = localStorage.getItem(library);
    if (localStorageRef) {
      this.setState({ library: JSON.parse(localStorageRef)})
    }
  }

  componentDidUpdate() {
      localStorage.setItem('Library', JSON.stringify(this.state.library));
      console.log('ready to fly again')
}

  addBook = (book) => {
    const library = { ...this.state.library };
    library[`book${Date.now()}`] = book;
    this.setState({ library }) 
  }

  loadLibrary = () => {
    this.setState({ library: stateLibrary }) 
  }

  updateLibrary = (key, updatedBook) => {
    const library = { ...this.state.library };
    library[key] = updatedBook;
    this.setState({ library });
  };

  deleteBook = (key) => {
    const library = { ...this.state.library };
    delete library[key];
    this.setState({ library });
  }

  saveCover = (image) => {
    const library = { ...this.state.library };
    library[image] = image;
    this.setState({ library });
  }

  render() {
    return (
      <div className="App">
        <header className="header-menu">
          <AdminMenu addBook={this.addBook} saveCover={this.saveCover} loadLibrary={this.loadLibrary} />
        </header>
        <div className="library-container">
          <ul className="main-container">
            {Object.keys(this.state.library).map(key => {
              return (
                <div className="wrapper">
                  <div className="book-container">
                    <Book
                      key={key}
                      index={key}
                      details={this.state.library[key]} />
                  </div>
                  <div className="editor-container">
                    <Editor
                      key={key}
                      index={key}
                      book={this.state.library[key]}
                      updateLibrary={this.updateLibrary}
                      deleteBook={this.deleteBook} />
                  </div>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    )
  };
}

export default App;
