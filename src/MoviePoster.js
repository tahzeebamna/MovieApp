import React,{useEffect,useState} from 'react'
import './MoviesBackground.css'
import Header from './Header';
import rotten from './assests/logo-rotten-tomatoes.svg'
import heart from './assests/icon-heart-grey.png'
import arrow from './assests/icon-arrow-grey.png'
import { useHistory, useParams } from 'react-router-dom';
import Axios from "axios";




const MoviePoster = ({idArr,setIdArr}) => {
    const {id}=useParams();
    const history = useHistory();
    const [poster, setPoster] = useState("")

    const clickHandler= ()=>{
        setIdArr([...idArr, id]);
        localStorage.setItem('fav', idArr)
        var dm = localStorage.getItem('fav')
    }
    
    useEffect(()=>{
        const fetchApi=()=>{
            Axios.get(`http://www.omdbapi.com/?i=${id}&apikey=aeef4506`)
            .then((response)=>{
                setPoster(response.data);
            })
        }
        fetchApi()
        var dm = localStorage.getItem('fav')
    },[idArr])

    return (
        <div >
            <Header/>
    <div className="poster">
        <div className="posterText">
                    <img src={arrow} onClick={()=>history.goBack()} alt="" className="arrow" />
                    <h3>{poster.Runtime} . {poster.Year} . {poster.Rated}</h3>   
                    <h1>{poster.Title}</h1>   
                    <div className="btn">
                        <button className="btnImd"><h5 className="db">IMDb</h5><div className="imdText">{poster.imdbRating}/10</div></button>
                        <button className="rottenM"><img className="rotten" src={rotten} alt="" /><span className="rottenText">96%</span></button>
                        <button className="add" className={`${idArr.includes(id)?"added":"remove"}`} onClick={clickHandler}> <img className="imgHeart" src={heart} alt="" /> Add to favourite</button>
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
            <div >
                 <img src={poster.Poster} className="posterImg" alt="" /> 
            </div>
        </div>
    </div>
    )
}

export default MoviePoster
