import React from 'react'
import './TagPage.css'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import { useLocation, useNavigate } from 'react-router-dom'

function TagPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    <div style={{width:'100%'}}>
      <Header/>
      <div style={{display:'flex',marginTop:'35px',justifyContent:'center'}}>
        <button onClick={() => navigate(-1)} style={{margin:'10px'}}>Back</button>
        <h3>Blogs Tagged <span># {tag}</span></h3>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default TagPage
