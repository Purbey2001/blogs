import React from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom'

function Card({post}) {
  return (
    <div className='myBox'>
      <div className='insideMyBox'>
        <NavLink to={`/blog/${post.id}`} style={{fontWeight:'bold',margin:'0'}}>{post.title}</NavLink>
          <p style={{fontSize:'small',margin:0}}>
            By <span>{post.author}</span> on <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`} style={{fontWeight:'bold',textDecoration:'underline'}}>{post.category}</NavLink>
          </p>
          <p style={{fontSize:'small',margin:'0'}}> Posted on <span style={{fontWeight:'bold'}}>{post.date}</span></p>
          <p>{post.content}</p>
          <div style={{display:'flex',columnGap:'8px',flexWrap:'wrap'}}>
            {post.tags.map( (tag,index) => {
              return <NavLink to={`/tags/${tag.replaceAll(" ","-")}`} key={index} style={{color:'blue',textDecoration:'underline',fontSize:'small'}}> {`#${tag}`} </NavLink>
            })}
          </div>
      </div>
    </div>
  )
}

export default Card
