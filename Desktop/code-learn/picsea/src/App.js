import SearchBarComponent from "./components/SearchBar";
import searchImages from './api';
import { useState } from "react";
import ImageListComponent from './components/ImageList';

/*async and await are really key things to writing proper
 reactJS code, or even simple JS as, JS does not wait for the
 response, and unless we specify the await keyword, it will most likely
 go for a promise, this is more so because of the nature of axios library that we are using*/

export default function App(){
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result)
  }
  return(<div>
    <SearchBarComponent onSubmit={handleSubmit}/>
    <ImageListComponent images={images}/>
  </div>)
}