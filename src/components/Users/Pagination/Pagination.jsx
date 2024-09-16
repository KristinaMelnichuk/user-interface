import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const pages = []; // Массив для хранения номеров страниц, которые будут отображаться
    const pageRange = 7; // Количество страниц, которые будут видны одновременно

    // Вычисляем начальную и конечную страницы для отображения
    const startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
    const endPage = Math.min(totalPages, startPage + pageRange - 1);

    // Заполняем массив pages номерами страниц от startPage до endPage
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.pagination}>
            <button 
                disabled={currentPage === 1} 
                onClick={() => onPageChange(currentPage - 1)}
            >
                {'<'}
            </button>
            {pages.map(p => (
                <span
                    key={p}
                    className={currentPage === p ? styles.selectedPage : ''}
                    onClick={() => onPageChange(p)}
                >
                    {p}
                </span>
            ))}
            <button 
                disabled={currentPage === totalPages} 
                onClick={() => onPageChange(currentPage + 1)}
            >
                {'>'}
            </button>
        </div>
    );
};

export default Pagination;