import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBAj5mt7mDGhqkoDMdBIp7Scl383PDyr5A';


const App = () => {
    return <h1>Hello World</h1>;            // Component CLASS. Creates HTML
}

ReactDOM.render(<App />, document.querySelector('.container'));

                                            // Component INSTANCE. DOM renders only
                                            // instances of the component class.
// <App />                                  // It takes HTML created in the component
                                            // above and renders it in the browser.

                                            // Target container: The html container where
                                            // the instance is going to be rendered

