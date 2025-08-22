import _ from 'lodash';
import { useEffect } from 'react';

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    const pageCount = Math.ceil(itemsCount / pageSize);

    useEffect(() => {
        if (currentPage > pageCount && pageCount > 0) {
            onPageChange(pageCount);
        } else if (itemsCount === 0 && currentPage !== 1) {
            onPageChange(1);
        }
    }, [itemsCount, pageCount, currentPage, onPageChange]);

    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    <li
                        className={'page-item' + (page === currentPage ? ' active' : '')}
                        key={'page_' + page}
                    >
                        <button className="page-link" onClick={() => onPageChange(page)}>
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
