import { useHistory, useParams } from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetail = () => {
    const {id} = useParams();
    const {data : blog, isPending, error} = useFetch('http://localhost:5000/blogs/' + id)
    const history = useHistory();

    function handleDelete(){
        fetch("http://localhost:5000/blogs/" + blog.id, {
            method: "DELETE"
            
        }). then(()=>{
            console.log("Blog deleted");
            history.push("/")
        })
    }
    return ( 
        <div className="blog-details">
           {isPending && <div>Loading ...</div>}
           {error && <div>{ error }</div>} 

        
           {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by :{blog.author}</p>
                <p>{blog.body}</p>

                <button onClick={handleDelete}>Delete</button>
            </article>
           )}     
        </div>
     );
}
 
export default BlogDetail;