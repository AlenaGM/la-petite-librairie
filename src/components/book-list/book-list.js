import BookListItem from "../book-list-item/book-list-item";

import './book-list.css';

const BookList = ({data, onDelete}) => {

    const elements = data.map(item => {

        const {isbn, ...itemProps} = item;

        return (
        <BookListItem
            key={isbn}
            {...itemProps}
            onDelete={()=> onDelete(isbn)}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default BookList;