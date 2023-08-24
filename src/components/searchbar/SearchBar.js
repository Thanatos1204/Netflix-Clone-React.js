import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './SearchBar.css';

export default function SearchBar({ setResults }) {

    const [input, setInput] = useState([]);

    
    const fetchSearch = async () =>{
        const response = await axios.get(`/search/movie?query=${input}`,{
            params:{
                append_to_response: '&include_adult=true&language=en-US&page=1',
            },

        });
        setResults(response.data?.results[0]?.original_title);
    }

    const handleChange = (value)=>{
        setInput(value);
        fetchSearch();
    }


  return (
    <div className='input-wrapper'>
        <input
            className='search-bar'
            placeholder='Search Here...'
            onChange={(e)=>{handleChange(e.target.value)}}
            value={input}
        />        
    </div>
  )
}
