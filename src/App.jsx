import React, { useContext, useEffect } from 'react'
import { Routes,Route, useSearchParams, useLocation } from 'react-router-dom'
import './App.css'

import Home from './Pages/Home'
import BlogPage from './Pages/BlogPage'
import CategoryPage from './Pages/CategoryPage'
import TagPage from './Pages/TagPage'
import { AppContext } from './context/AppContext'

function App() {
  const {fetchBlogPosts} = useContext(AppContext)
  const [searchParams,setSearchParams] = useSearchParams()
  const location = useLocation()

  useEffect( () => {
    const page = searchParams.get("page") ?? 1;
    //urlHandle(page)
    if(location.pathname.includes("tags")){
      //iska mtlb tag wala page show krna parega
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      //iska mtlb category wala page show krna parega
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),null,category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
  },[location.pathname,location.search])

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:blogId' element={<BlogPage/>}/>
        <Route path='/categories/:category' element={<CategoryPage/>}/>
        <Route path='/tags/:tag' element={<TagPage/>}/>
      </Routes>
    </div>
  )
}

export default App
