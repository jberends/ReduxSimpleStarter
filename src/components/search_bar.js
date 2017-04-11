// input in the top where the user can type in
import React, {Component} from 'react';

class SearchBar extends Component {
    // Default renderer (JSX)
    render() {
        return <input onChange={this.onInputChange} />;
    }

    // Event handlers
    onInputChange() {

    }
}

export default SearchBar;