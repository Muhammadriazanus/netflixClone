import React,{useState,useEffect} from 'react'
import { useAuth } from '../context/AuthContext';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { db } from '../firebase';
import { doc,onSnapshot } from 'firebase/firestore';

const SavedShows = () => {
    const {user} = useAuth()
    const [movies,setmovies] = useState([])
    const [like,setlike] = useState([])
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
      };
      const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
      };
      useEffect(()=>{
        onSnapshot(doc(db,'users',`${user?.email}`),(doc)=>{
            setmovies(doc.data()?.savedShows)
        })
      },[user?.email])
    return (
        <div>
            <>
            <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
                <div className='relative flex items-center group'>
                    <MdChevronLeft onClick={slideLeft} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-500 cursor-pointer z-10 hidden group-hover:block' size={40} />
                    <div id={"slider"} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                        {movies?.map((item, id) => (
                            <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
                            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                                    {item?.title}
                                </p>
                            </div>
                        </div>
                        ))} 
                    </div>
                    <MdChevronRight onClick={slideRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-500 cursor-pointer z-10 hidden group-hover:block' size={40} />
                </div>
            </>

        </div>
    )
}

export default SavedShows
