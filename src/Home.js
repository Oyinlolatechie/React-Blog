import {useState } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs ] = useState([
        { title: "My website", body: "This is a demo content...", author: "oyinlola", id: 1 },
        { title: "My Journey", body: "This is a demo content...", author: "Oluwafemi", id: 2 },
        { title: "OyinlolaTechie Roadmap", body: "This is a demo content...", author: "oyinlola", id: 3 },
      
    ])

   const handleDelete = (id)=> {
        setBlogs(blogs.filter(blog => blog.id !==id))
   }

   
 

    return (
    <div className="home">
        <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
    </div>
    );
}

export default Home;