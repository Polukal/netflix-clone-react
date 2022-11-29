import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie';

const Row = ({title, fetchURL}) => {
   
    const[movies,setMovies] = useState([])
    

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }
    , [fetchURL])
    console.log(movies)

  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center'>
            <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {movies.map((item, id) => (
                    <Movie key={id} item={item}/>
                ))}
            </div>
        </div>

    </>
  )
};

export default Row

/*
{movies.map((item, id) => (
                    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 '>
                        <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title} />
                    </div>
                ))}

                useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }
    , [fetchURL])
    console.log(movies)
*/