import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import './CategoryPage.css'

function CategoryPage() {
  const navigate= useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header/>
      <div style={{display:'flex',marginTop:'35px',justifyContent:'center'}}>
        <button onClick={() => navigate(-1)} style={{paddingTop:'5px',paddingBottom:'5px'}}>Back</button>
        <h3 style={{margin:'12px'}}>Blogs on <span># {category}</span></h3>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default CategoryPage
