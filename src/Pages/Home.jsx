import './Home.css'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

function Home() {
  return (
    <div className='home'>
      <Header/>
      <div style={{marginTop:'30px'}}>
        <Blogs/>
      </div>
      
      <Pagination/>
    </div>
  )
}

export default Home
