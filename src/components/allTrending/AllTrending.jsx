import React, { useEffect, useState } from 'react';
import Main from '../main/Main';
import Title from '../pageTitle/Title';
import axios from 'axios';

import './allTrending.css';
import Card from '../card/Card';
import Loading from './../loading/Loading';

export default function AllTrending(){

    const [allData , setAllData] = useState(null)

    async function getAllData(){

        const {data} = await axios.get('https://api.themoviedb.org/3/trending/all/day?language=en-US' , {

            headers : {

                accept : 'application/json',
                Authorization : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGQ3ZWFmMzZiYzU4MGJlNTE5NTFmODBkYjVkZGE0ZCIsIm5iZiI6MTcxOTA3NTY0Ny41MjM1NDEsInN1YiI6IjY2NzMzYWE3MjhlZDI3YmUyMzM0NmE3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gDasaU9Pz38Qf5GxF9TDF8__EW3mSd32a6O2TTYaSg8'

            },

        })

        setAllData(data.results);

    };

    useEffect(function(){

        getAllData();

    } , []);


    return <React.Fragment>

        <Main />

        <div className='trending'>

            <Title title = 'Trending' />

            {allData === null ? <Loading /> : <>

                <div className="card_container">

                    {allData.map((trending , idx) => {

                        return(

                            <Card 

                                key = {idx}
                                overview = {trending.overview}
                                rate = {trending.vote_average}
                                rateNum = {trending.vote_count}
                                date = {trending.release_date !== undefined ? trending.release_date : trending.first_air_date} 
                                type = {trending.media_type} 
                                img = {trending.poster_path} 
                                title = {trending.original_name !== undefined ? trending.original_name : trending.original_title}

                            />

                        )

                    })}

                </div>

            </>}

        </div>

    </React.Fragment>
}
