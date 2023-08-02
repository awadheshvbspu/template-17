import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import Movie from './Movie'

export default function Row({title, fetchURL,rowID}) {
    const [movie,setMovie] = useState([])
//    const [like,setLike] = useState(false)
    useEffect(()=>{
    axios.get(fetchURL).then((response)=>{
            setMovie(response.data.results)
    })
    },[fetchURL])

    // console.log(movie)

    const slideleft = () =>{
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = () =>{
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500;
    }

  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideleft} size={40} className='bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
        <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {movie.map((item,id)=>(
            <Movie item={item} key={id}/>
          ))}
        </div>
                <MdChevronRight onClick={slideRight} size={40} className='bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
        </div>
    </>
  )
}
