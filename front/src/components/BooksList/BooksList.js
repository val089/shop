import React from 'react';
import Book from '../Book';
import './BooksList.scss';

const BooksList = ({ data }) => {

    return(
        <section className="books-list">
            {data.map(book => (
                <Book
                    key={book.id}
                    data={book}
                />
            ))}
        </section>
    );
};

export default BooksList;
