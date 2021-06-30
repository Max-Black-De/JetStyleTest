import React from 'react'
import CreateBook from './CreateBook';

class AdminMenu extends React.Component {

    render() {

        return (
            <div className="adminMenu">
                <header className="adminMenu-header">
                    <h1>
                        Список литературы на лето 5 "П" класс.
                    </h1>
                </header>
                <CreateBook
                key={this.props.keys}
                index={this.props.keys}
                setKeys={this.props.setKeys}
                showImages={this.props.showImages}
                addBook={this.props.addBook}
                />
                
                <button onClick={this.props.loadLibrary}>Загрузить готовую библиотеку</button>
            </div>
        );
    }
}

export default AdminMenu;