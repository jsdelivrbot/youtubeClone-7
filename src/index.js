import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBAj5mt7mDGhqkoDMdBIp7Scl383PDyr5A';


const App = () => {                         // Component CLASS. Creates HTML
    return (
        <div>
            <h1>YoutubeClone</h1>
            <SearchBar />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('.container'));

                                            // Component INSTANCE. DOM renders only
                                            // instances of the component class.
// <App />                                  // It takes HTML created in the component
                                            // above and renders it in the browser.

                                            // Target container: The html container where
                                            // the instance is going to be rendered

