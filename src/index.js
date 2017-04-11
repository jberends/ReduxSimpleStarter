// Create a new component, this component should produce some HTML
import React from "react";
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCYTa9QyvGdAzFY_J-DLRZaNfn5RtzwN8Y';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

// take this component's generated HTML and put in on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
