import React, { useContext, useEffect,useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Spinner from '../components/Spinner';
import Card from '../components/Card';
import Header from '../components/Header';
import './BlogPage.css'


function BlogPage() {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/"
    const [blog,setBlog] = useState(null);
    const [relatedBlogs,setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const {setLoading,loading} = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
      setLoading(true);
      let url=`${newBaseUrl}get-blog?blogId=${blogId}`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        setBlog(data.blog);
        setRelatedBlogs(data.relatedBlogs);
      } catch (error) {
        console.log("Error in fetching url in blog Page")
        setBlog(null)
        setRelatedBlogs([])
      }
      setLoading(false);
    }

    useEffect(() => {
      if(blogId){
        fetchRelatedBlogs()
      }
    },[location.pathname])

  return (
    <div style={{width:'100%'}}>
      <Header/>
      <div style={{marginTop:'35px',marginLeft:'auto',marginRight:'auto',width:'60%',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <button onClick={() => navigate(-1)}>Back</button>
        {
          loading ? <Spinner/> : 
          <div>
            { blog ?
            <div>
              <Card post={blog}/> 
              <h3>Related Blogs</h3>
              {
                relatedBlogs.map((relatedBlog) => <Card post={relatedBlog} key={relatedBlog.id}/>)
              }
            </div>
            : <p>No Blog Found</p> }
          </div>
        }
      </div>
    </div>
  )
}

export default BlogPage
