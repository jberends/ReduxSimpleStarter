export function selectBook(book) {
    // is an ActionCreator and it needs to return an action
    // an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}