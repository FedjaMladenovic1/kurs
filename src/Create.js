import { useState } from "react";
import { useHistory } from 'react-router-dom'

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('mario');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title,body,author};

        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New blog added');
            setIsLoading(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Dodaj novi blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Naslov:</label>
                <input
                 type="text"
                 required
                 value = {title}
                 onChange={(e) => setTitle(e.target.value)}
                />
                <label>Telo:</label>
                <textarea
                    required
                    value = {body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Autor bloga:</label>
                <select
                    value = {author}
                    onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value="mario">Fedja</option>
                    <option value="yoshi">Ivo</option>
                </select>
                {!isLoading && <button>Dodaj blog</button>}
                {isLoading && <button disabled>Adding blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;