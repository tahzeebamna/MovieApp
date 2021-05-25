import React, {useState} from 'react'
import './MoviesBackground.css'
import Moviescard from './Moviescard'
import Header from './Header'

// http://www.omdbapi.com/?i=tt3896198&apikey=637dcde2
   // http://www.omdbapi.com/?apikey=[tt3896198&apikey=637dcde2]&
   // http://img.omdbapi.com/?apikey=[yourkey]&

const MoviesBackground = () => {
  
    const [inputText, setInputText] = useState("")
    const inputhandler =(e)=>{
        setInputText(e.target.value)
    }

  console.log(inputText);
  return (
        <div className="container">
          <div className="header">
    <Header/>

                <div className="input">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <input type="search" value={inputText} onChange={inputhandler} placeholder="Search movies..."/>
                </div>
          </div>

          {
            inputText && inputText.length>2 
            ?
              <Moviescard  
                inputText={inputText}
              />
            : 
            <div className="illustrations">
            <img className="illustration"  src="./images/2.illustrations/illustration-empty-state@2x.png" alt="" />
            <div className="illus-text">
                <h2>Don't Know what to search?</h2>
                <p>Here's an offer you can't refuse</p>
            </div>
          </div>
          }
      </div>
    )
}

export default MoviesBackground
