import axios from 'axios'
import requests from './request'
import React from 'react'
import { useState, useEffect } from 'react'
import "./Banner.css"

function Bannner() {


    const [movie, setMovie] = useState([])


    useEffect(() => {

        async function fetchData() {

            const request = await axios.get(requests.fetchNetflixOriginals)
            console.log(request.data.results)

            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)
            ]
            )
            return request;



        }
        fetchData();

    }, [])

    console.log(movie)

    return (

        <header className="banner">

            <div className="banner_content">

                <div className="container">

                    <h1 className='titenic'>
                        Minions: The Rise of Gru
                    </h1>
                    <button className="banner_btn">previous</button>
                    <button className="banner_btn">Playlist</button>

                    <div className="banner_desc">
                        everything is gonna  be Okay Dude !
                    </div>
                </div>


            </div>



        </header>











    )
}

export default Bannner