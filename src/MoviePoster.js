import React,{useEffect,useState} from 'react'
import './MoviesBackground.css'
import Header from './Header';
import rotten from './assests/logo-rotten-tomatoes.svg'
import heart from './assests/icon-heart-grey.png'
import arrow from './assests/icon-arrow-grey.png'
import { useHistory, useParams } from 'react-router-dom';
import heartf from './assests/icon-heart-full.svg'

import Axios from "axios";




const MoviePoster = ({idArr,setIdArr}) => {
    let {id} = useParams();
    const history = useHistory();
    const [poster, setPoster] = useState('')
    
    useEffect(()=>{
        
        const fetchApi=()=>{
            Axios.get(`http://www.omdbapi.com/?i=${id}&apikey=aeef4506`)
            .then((response)=>{
                setPoster(response.data);
            })
        }
        fetchApi()
        localStorage.getItem('fav')
    },[])

    const clickHandler = () => {
        setIdArr([...idArr, id]);
        localStorage.setItem('fav', idArr)
        id=''; 
    }

    const removeHandler = () => {
        const vali = idArr.filter(i => i != id)
        setIdArr(vali)
    }
    
    return (
        <div className="MoviePoster">
         <div className="headposter"> <Header/></div>

        <div className="poster">

        
            <div className="posterText">
                    <img src={arrow} onClick={()=>history.goBack()} alt="" className="arrow" />
                    <h3>{poster.Runtime} . {poster.Year} . {poster.Rated}</h3>   
                    <h1>{poster.Title}</h1>   
                    <div className="btn">
                        <button className="btnImd"><h5 className="db">IMDb</h5><div className="imdText">{poster.imdbRating}/10</div></button>
                        <button className="rottenM"><img className="rotten" src={rotten} alt="" /><span className="rottenText">96%</span></button>
                        {
                            idArr.includes(id) 
                            ?   
                            <button className="added add1" onClick={ () => removeHandler()}> 
                               <img className="imgHeart heartFull" src={heartf} alt="" /> 
                                Added
                            </button>
                            :
                            <button className="add  " onClick={ () => clickHandler()}> 
                                <img className="imgHeart" src={heart} alt="" />
                                Add to favourite
                            </button>
                        }
                    </div>

                    <div className="p1">
                            <h4>Plot</h4>
                            <p>{poster.Plot}</p>
                    </div>
                    <div className="p2">
                        <div className="info">
                            <h4>Cast</h4>
                            <p>{poster.Writer}</p>
                        </div>
                        <div className="info">
                            <h4>Genre</h4>
                            <p>{poster.Genre}</p>
                        </div>
                        <div className="info">
                            <h4>Director</h4>
                            <p>{poster.Director} </p>
                        </div>
                    </div>
            </div>
            <div  className="posterImg">
                 <img src={poster.Poster} className="posterImg" alt="" /> 
            </div>
        </div>
    </div>
    )
}

export default MoviePoster
