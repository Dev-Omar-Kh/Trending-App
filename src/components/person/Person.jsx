import React, { useEffect, useState } from 'react';

import '../allTrending/allTrending.css'
import Title from '../pageTitle/Title';
import axios from 'axios';
import PersonCard from '../personCard/PersonCard';
import Loading from '../loading/Loading';

export default function Person(){

    const [allTrendingPeople, setAllTrendingPeople] = useState(null);

    async function allPeople(){

        const {data} = await axios.get('https://api.themoviedb.org/3/trending/person/day?language=en-US' , {

            headers : {

                accept : 'application/json',
                Authorization : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGQ3ZWFmMzZiYzU4MGJlNTE5NTFmODBkYjVkZGE0ZCIsIm5iZiI6MTcxOTA3NTY0Ny41MjM1NDEsInN1YiI6IjY2NzMzYWE3MjhlZDI3YmUyMzM0NmE3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gDasaU9Pz38Qf5GxF9TDF8__EW3mSd32a6O2TTYaSg8'

            }

        });

        setAllTrendingPeople(data.results);

    };

    useEffect( () => {

        allPeople();

    } , [] )

    return <React.Fragment>

        <div className="trending">

            <Title title = 'People' />

            {allTrendingPeople === null ? <Loading /> : <>

                <div className="card_container">

                    {allTrendingPeople.map( (data , idx) => {

                        return <PersonCard 

                            key = {idx}
                            overview = {data.known_for}
                            rate = {data.vote_average}
                            gender = {data.gender}
                            known = {data.known_for_department !== undefined ? data.known_for_department : ''} 
                            popularity = {data.popularity} 
                            img = {data.profile_path} 
                            title = {data.original_name !== undefined ? data.original_name : data.original_title}

                        />

                    })}

                </div>

            </>}

        </div>

    </React.Fragment>

}
