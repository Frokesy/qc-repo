import React from 'react'
import { usePagination, DOTS } from '../../CustomHooks/usePagination'
import './Pagination.scss'
import { ImArrowLeft, ImArrowRight } from 'react-icons/im'
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 3,
    currentPage,
    pageSize,
  } = props

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  let lastPage = paginationRange[paginationRange.length - 1]
  return (
    <div className='paginations'>
      <ul>
        <li className={currentPage === 1 ? 'disable' : ''} onClick={onPrevious}>
          <ImArrowLeft />
        </li>
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <li key={pageNumber + 1} className='pagination-item dots'>
                &#8230;
              </li>
            )
          }

          return (
            <li
              key={pageNumber + 1}
              className={pageNumber === currentPage ? 'active' : ''}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          )
        })}
        <li
          className={currentPage === lastPage ? 'disable' : ''}
          onClick={onNext}
        >
          <ImArrowRight />
        </li>
      </ul>
    </div>
  )
}

export default Pagination
