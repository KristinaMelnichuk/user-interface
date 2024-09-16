import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ pagesCount, currentPage, onPageChange }) => {
    const pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => (
                <span
                    key={p}
                    className={currentPage === p ? styles.selectedPage : ''}
                    onClick={() => onPageChange(p)}
                >
                    {p}
                </span>
            ))}
        </div>
    );
};

export default Pagination;