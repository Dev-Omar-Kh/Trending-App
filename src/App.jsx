import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllTrending from './components/allTrending/AllTrending';
import Error from './components/error/Error';
import Movies from './components/movies/Movies';
import Person from './components/person/Person';
import TV from './components/tv/TV';

const router = createBrowserRouter([

    {path: '' , element : <Layout /> , children : [

        {path : '/' , element : <AllTrending />} ,
        {path : '/movie' , element : <Movies />} ,
        {path : '/people' , element : <Person />} ,
        {path : '/tv' , element : <TV />} ,

        {path : '*' , element : <Error />} ,

    ]}

])

export default function App(){

    return(

        <RouterProvider router={router} />

    )

}
