import React, { useEffect, useState } from 'react';
import Title from '../pageTitle/Title';

import '../allTrending/allTrending.css';
import Card from '../card/Card';
import axios from 'axios';
import Loading from '../loading/Loading';

export default function Movies(){

    const [allMoviesData , setAllMoviesData] = useState(null)

    async function allMovies(){

        const {data} = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US' , {

            headers : {

                accept : 'application/json',
                Authorization : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGQ3ZWFmMzZiYzU4MGJlNTE5NTFmODBkYjVkZGE0ZCIsIm5iZiI6MTcxOTA3NTY0Ny41MjM1NDEsInN1YiI6IjY2NzMzYWE3MjhlZDI3YmUyMzM0NmE3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gDasaU9Pz38Qf5GxF9TDF8__EW3mSd32a6O2TTYaSg8'

            }

        });

        setAllMoviesData(data.results);

    }

    useEffect( () => {

        allMovies();

    } , [] )

    return <React.Fragment>

        <div className= 'trending'>

            <Title title = 'Movies' />

            {allMoviesData === null ? <Loading /> : <>

                <div className="card_container">

                    {allMoviesData.map( (data , idx) => {

                        return <Card

                            key = {idx}
                            overview = {data.overview}
                            rate = {data.vote_average}
                            rateNum = {data.vote_count}
                            date = {data.release_date !== undefined ? data.release_date : data.first_air_date} 
                            type = {data.media_type} 
                            img = {data.poster_path} 
                            title = {data.original_name !== undefined ? data.original_name : data.original_title}

                        />

                    })}

                </div>

            </>}

        </div>

    </React.Fragment>

}
