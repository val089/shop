import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../../redux/redux';
import './Books.scss';
import BooksList from '../../BooksList';

const Books = (props) => {
    const {
        fetchBooks,
        books,
        isLoading,
        isError
    } = props;

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    return(
        <section className="books-section">
           <BooksList
                data={books}
           />
           {isLoading && <p className="books-section__loading">Loading...</p>}
           {isError && <p className="books-section__error">An error has occurred</p>}
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        books: state.shop.books,
        isLoading: state.shop.isLoading,
        isError: state.shop.isError
    };
};

const mapDispatchToProps = {
    fetchBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);