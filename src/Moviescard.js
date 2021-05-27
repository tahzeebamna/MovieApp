import React, {useEffect, useState} from 'react'
import Axios from "axios"
import './MoviesBackground.css';
import {Link} from "react-router-dom"
import heartw from './assests/icon-heart-white.svg'
import heartf from './assests/icon-heart-full.svg'



const MoviesCard = ({inputText, idArr,setIdArr}) => {
    const [searchMovie, setSearchMovie] = useState([])

    useEffect(()=>{
        const fetchApi=()=>{
            Axios.get(`http://www.omdbapi.com/?s=${inputText}&apikey=aeef4506`)
            .then((response)=>{
                setSearchMovie(response.data.Search);
            })

        }
        fetchApi()
        localStorage.getItem('fav')
    })

    const clickHandler = (id) => {
        setIdArr([...idArr, id]);
        localStorage.setItem('fav', idArr)
        id='';
    }

    const removeHandler = (id) => {
        const vali = idArr.filter(i => i != id)
        setIdArr(vali)
    }


    return (
        <div className="mainCrad1">

            <div className="mainCard">
                

            {
                searchMovie && searchMovie.map((curval)=>{
                return (
                    <Link to={`/movie/${curval.imdbID}`}>
                    <div className="card">
                            {idArr.includes(curval.imdbID) ? <div className="cont"><img  className="img1 " src={curval.Poster} alt="" />
                            <img  className="hear cardHeart" src={heartf} alt="" /></div>: <img  className="img1" src={curval.Poster} alt="" />}
                             
                        <div className="content">
                            <div className="heart">
                                {
                                    idArr.includes(curval.imdbID) 
                                    ?   
                                    <img src={heartf} className="heartw" alt="heartw" onClick={ () => removeHandler(curval.imdbID)} />
                                    : 
                                    <img src={heartw} alt="" className="heartw"  onClick={ () => clickHandler(curval.imdbID)} />
                                }
                                
                               
                            </div>
                            <div className="cuTitle">{curval.Title}</div>
                            <div className="year">{curval.Year}</div>
                        </div>
                    </div>
                    </Link>
                )})
                            
            }
                   
            </div>
        </div>
        

    )
}

export default MoviesCard
