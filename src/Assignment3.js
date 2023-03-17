import React from "react";
import { useState, useEffect } from "react";
import './Assignment3.css';

const Moviecard = () =>{
    const [movie,setMovie] = useState([]);
    const [query,setQuery] = useState("");
    const getMovieReq = async () =>{
        const url= "https://www.omdbapi.com/?apikey=45f0782a&s=war";
        const response=await fetch(url);
        const data=await response.json();
        console.log(data.Search)
        setMovie(data.Search)
    }
    useEffect(()=>{
        getMovieReq();
    },[])


    return(
        <>
        <div className="main">
            <div className="heading">
               <h1>Movie Search</h1>
             </div>
            <div className="search-box">
                <input type="Search" className="search-bar" placeholder="Search for Movie Title" onChange= {(e) =>setQuery(e.target.value)}  />
            </div>

            {
                movie.filter((key)=>
                key.Title.toLowerCase().includes(query)).map((key,index)=>{
                    return(
                        <React.Fragment key={index}>
                            <div className="cards" id={index} key={index}>
                                <img src={key.Poster} alt="img"/>
                                <h1 id={index}>{key.Title}</h1>
                            </div>
                        </React.Fragment>
                    )
                })
            }
        </div>
        </>
    )
}



export default Moviecard;