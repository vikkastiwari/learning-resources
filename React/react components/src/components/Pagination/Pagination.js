import React, { useState } from 'react';
import './Pagination.css';

const Pagination = ({itemsPerPage, totalItems, onChange}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalItems/itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        onChange(page);
    }

    const onPrevNextHandler = (type) => {
        if(type === 'prev' && currentPage > 1){
            handlePageChange(currentPage-1);
        }else if(type === 'next' && currentPage < totalPages){
            handlePageChange(currentPage+1);
        }
    }

    const renderPagers = () => {
        let pages = [];
        for(let i=1;i<=totalPages;i++){
            pages.push(
                <li key={i} className={`pager ${currentPage === i ? 'active' : ''}`}>
                    <button onClick={() => handlePageChange(i)}>{i}</button>
                </li>
            )
        }
        return pages;
    }

    return (
        <div>
            <div className='pagination-title'>Showing page {currentPage} of {totalPages}</div>

            <div className='pagination'>
                <ul className='pagination-list'>
                    <button disabled={currentPage === 1} onClick={() => onPrevNextHandler('prev')} type='button'>prev</button>
                    {renderPagers()}
                    <button disabled={currentPage === totalPages}  onClick={() => onPrevNextHandler('next')} type='button'>next</button>
                </ul>
            </div>
        </div>
    )
}

export default Pagination;