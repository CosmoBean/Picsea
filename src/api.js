import axios from "axios";
const client_id = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const auth_header = 'Client-ID '.concat(client_id)
console.log(auth_header);
const searchImages= async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers: {Authorization: auth_header},
        params:{query:term}
    });
    return response.data.results; 
    
};

export default searchImages;