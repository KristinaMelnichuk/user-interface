import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    return (
        <div className={styles.pagination}>
            <button 
                className={styles.pageButton}
                disabled={currentPage === 1} 
                onClick={() => onPageChange(currentPage - 1)}
            >
                {'<'}
            </button>
            
            <button 
                className={styles.pageButton}
                disabled={currentPage === totalPages} 
                onClick={() => onPageChange(currentPage + 1)}
            >
                {'>'}
            </button>
        </div>
    );
};

export default Pagination;