import './Row.css';
import axios from 'axios';
import Card from '../card/Card';
import {useEffect,useState} from 'react'

export default function Row(props) {

    const [movies,setMovies] = useState([]);

    const fetchMovies = async() => {
        const response = await axios.get(props.url);
        setMovies(response.data.results);
    }

    useEffect(()=>{
        fetchMovies();
    })

  return (
    <div className='row-wrapper'>
        <h3 className='row-title'>{props.title}</h3>
        <div className='row-card'>
            {
                movies.map((el)=>{
                    return <Card 
                    key={el.id}
                    id={el.id}
                    title={el.title}
                    isAdult={el.adult}
                    backdroPath={el.backdrop_path}
                    voteAverage={el.vote_average} />;
                })
            }
        </div>
        
    </div>
  )
}
