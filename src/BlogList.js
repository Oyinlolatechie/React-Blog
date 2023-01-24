import { useEffect, useState } from "react";

const BlogList = ({blogs, title, handleDelete}) => {

 const [name, setName] = useState("Oyinlola")

 useEffect( () =>
 (console.log("use effect ran")), [name]
)

    return (  
        <div className="blog-list">
            <h2>{title}</h2>

             {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p> Written by :{blog.author}</p>
                <button onClick={()=>{
                    handleDelete(blog.id)
                }}>Delete</button>
            </div>
        ))
        }
           <p>{name}</p>
                <button onClick={()=>{setName("Oluwafemi")}}>CLICK</button>
        </div>
    );
}
 
export default BlogList;