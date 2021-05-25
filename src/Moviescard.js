import React, {useEffect, useState} from 'react'
import Axios from "axios"
import './MoviesBackground.css';
import {Link} from "react-router-dom"
import heartw from './assests/icon-heart-white.svg'
import heartf from './assests/icon-heart-full.svg'



const MoviesCard = ({inputText}) => {
    const [searchMovie, setSearchMovie] = useState([])

    useEffect(()=>{
        const fetchApi=()=>{
            Axios.get(`http://www.omdbapi.com/?s=${inputText}&apikey=aeef4506`)
            .then((response)=>{
                setSearchMovie(response.data.Search);
            })

        }
        fetchApi()
    })


    return (
         <div className="mainCrad1">

          <div className="mainCard">
                

                    {
                      searchMovie && searchMovie.map((curval)=>{
                                return<Link to={`/movie/${curval.imdbID}`}>
                                <div className="card">
                                                <img  className="img1" src={curval.Poster} alt="" />
                                               
                                                <div className="content">
                                                    <div className="heart">
                                                        <img src={heartw} className="heartw" />
                                                        <img src={heartf} alt="" className="heartw" />
                                                    </div>
                                                    <div className="cuTitle">{curval.Title}</div>
                                                    <div className="year">{curval.Year}</div>
                                                </div>
                                       </div>
                                    </Link>
                    })
                                  
                    }
                   
         </div>
        </div>
        

    )
}

export default MoviesCard
