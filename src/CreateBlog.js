import { useState } from "react";
import {useHistory} from "react-router-dom";

const CreatePage = () => {
const [title, setTitle] = useState("");
const [body, setBody] = useState(" ");
const [author, setAuthor] = useState(" ");
const [isPending, setIsPending] = useState(false)
const history = useHistory('');

function handleSubmit(e) {
    e.preventDefault();
    const blog = {title, body , author }
    setIsPending(true);

    fetch("http://localhost:5000/blogs", {
        method:"POST",
        headers : {"content-Type": "application/json"},
        body : JSON.stringify(blog)

    }) .then( ()=>{
            console.log("New blog added");
            setIsPending(false)
            history.push('/')
        })
}

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>

        <form onSubmit={handleSubmit}>
            <label> Blog Title:
                <input 
                type="text" 
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </label>

            <label> Blog Body:
                <textarea 
                required
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                >

                </textarea>              
            </label>

            <label>Blog author:</label>
            <select
            required
            value={author}
            onChange={(e)=> setAuthor(e.target.value)}
            >
            <option >Oyinlola</option>
            <option >Techie</option>
            </select>

            {!isPending && <button>Add a Blog</button>}
            {isPending && <button disabled>Adding a Blog...</button>}
          
        </form>
        </div>
     );
}
 
export default CreatePage;