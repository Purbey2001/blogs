import React, { useContext} from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import NoPostFound from './NoPostFound'
import Card from './Card'
import './Blogs.css'



function Blogs() {
    const {loading,posts} = useContext(AppContext)
  return (
    <div className='blogs'>
      {
        loading ? 
        <Spinner/> :
        (
          posts.length === 0 ? <NoPostFound/> :
          posts.map((post)=> <Card post={post} key={post.id}/>)
        )
      }
    </div>
  )
}

export default Blogs
