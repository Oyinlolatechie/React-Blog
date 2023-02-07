// import { useEffect, useState } from "react";
import BlogList from './BlogList'
import useFetch from "./useFetch";


const HomePage = () => {

    const {data : blogs, isPending, error} = useFetch("http://localhost:5000/blogs")

    
    return (
        <div className="home">
            {error && <div className="">{error}</div>}
            {isPending && <div> loading .. </div>}
            {blogs && <BlogList blogs={blogs} title= "All Blogs !" />}
        </div>
    );
    
}




export default HomePage;