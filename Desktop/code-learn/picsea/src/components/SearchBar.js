import { useState } from "react";
import './SearchBar.css'

export default function SearchBarComponent({onSubmit}) {
    const [term, setTerm] = useState('');
    const handleFormSubmit = (event) => {
        /*crucial important part!
        browser, upon the submitting a form, makes a network request to 
        the current url with submit paramenters as the query parameters*/
        event.preventDefault();
        //document.querySelector('input').value    {don't use this}
        onSubmit(term);
    }
    const handleChange =(event) =>{
        setTerm(event.target.value);
    }
    //forms have a very unique behavior, keep track of it
    return(<div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Search an Image!</label>
                <input value={term} onChange={handleChange}/>
            </form>
            </div>)
}