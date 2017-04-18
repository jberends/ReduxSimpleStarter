// state argument is not application state, only the stat this reducer is responsible for
// meaning how you actually wire the app up
export default function (state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}