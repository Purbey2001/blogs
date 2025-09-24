import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import './Pagination.css'

function Pagination() {
  const {page,totalPages,handlePageChange} = useContext(AppContext)
  return (
    <footer style={{width:'100%',display:'flex',justifyContent:'center',paddingTop:'55px'}}>
      <div className='pagination' style={{zIndex:'100'}}>
        <div className='pageChanger'>
          {page !== 1 && <button onClick={ () => handlePageChange(page-1)}      >Previous</button>}
          {page !== totalPages && <button onClick={ () => handlePageChange(page   +1)}>Next</button>}
        </div>
        <div style={{fontWeight:'bold'}}>
          Page {page} of {totalPages}
        </div>
      </div>
    </footer>
    
  )
}

export default Pagination
