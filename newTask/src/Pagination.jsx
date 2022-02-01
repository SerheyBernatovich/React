import React from 'react';

// input: pageNumber, prevHandler, nextHandler
// output: jsx

const Pagination = ({ pageNumber, next, prev, itemsPage, userCount }) => {
  const isPrevPageAvailable = pageNumber !== 1;
  const isNextPageAvailable = pageNumber !== Math.ceil(userCount / itemsPage);

  return (
    <div className="pagination">
      <button className="btn" onClick={prev} disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable && '←'}
      </button>
      <span className="pagination__page">{pageNumber}</span>
      <button className="btn" onClick={next} disabled={!isNextPageAvailable}>
        {isNextPageAvailable && '→'}
      </button>
    </div>
  );
};

export default Pagination;
