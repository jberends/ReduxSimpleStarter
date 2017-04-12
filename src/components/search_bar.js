// input in the top where the user can type in
import React, {Component} from 'react';

class SearchBar extends Component {
    // class based components have constructor and state
    constructor(props) {
        super(props);

        // state is in internal attr and when state changes, the instance of a class-based comp gets re-rendered.
        this.state = { term: ''};
    }

    // Default renderer (JSX)
    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })}
                />
            </div>
        );
    }

}

export default SearchBar;