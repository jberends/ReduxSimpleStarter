import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';


class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            )
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // whatever is returned will show up as props inside BookList
    return {
        books: state.books
    };
}

// Anything returned from this function will end up as props on the BookList container
// 'cause we 'connect'ed it. we map the dispatch to the props
function mapDispatchToProps(dispatch) {
    // Whenever SelectBook is called, the result should be passed to all of our reducer
    // kinda registration function
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

// Promote BookList from a component to a container and it needs to know about
// this new dispatch method, selectBook. Make it available as a prop (this.props....)
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
