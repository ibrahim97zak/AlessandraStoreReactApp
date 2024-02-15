import React from 'react'
import style from './Pagination.css'

function Pagination({ pages, cuurentPage, setCurentPage }) {
    const generatedPages = []
    for (let i = 1; i <= pages; i++) {
        generatedPages.push(i)
    }
    return (
        <div className='Pagination'>
            <button
                disabled={cuurentPage === 1}
                onClick={() => setCurentPage(prev => prev - 1)}
                className='page previous'>
                <i className="fa-solid fa-chevron-right fa-rotate-180"></i>
            </button>
            {generatedPages.map(page =>
                <div onClick={() => setCurentPage(page)}
                    className={cuurentPage === page ? "page active" : "page"}
                    key={page}>
                    {page}
                </div>
            )}
            <button
                disabled={cuurentPage === pages}
                onClick={() => setCurentPage(next => next + 1)}
                className='page previous'>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    )
}

export default Pagination