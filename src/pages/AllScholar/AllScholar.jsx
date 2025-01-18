import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import ScholarCard from '../../components/AllScholars/ScholarCard';
import Heading from '../../components/shared/Heading';
import SearchInput from '../../components/SearchInput';
import LoadingSpinner from '../../components/LoadingSpinner';
import { useLoaderData } from 'react-router-dom';

const AllScholar = () => {
    const [search, setSearch] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage]=useState(0)
    console.log(search)
    const {count} = useLoaderData()
    const itemParPage= 8
    const pageNumber= Math.ceil(count/itemParPage) 

    const { data: scholarships = [], isLoading } = useQuery({
        queryKey: ['scholarships', searchQuery, currentPage, itemParPage],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/scholars?search=${searchQuery}&page=${currentPage}&limit=${itemParPage}`)

            console.log(data)
            return data
        }
    })
    const handleSearch = () => {
        setSearchQuery(search)


    }

    const pages= [...Array(pageNumber).keys()]
    
    
    const handlePev=()=>{
        if(currentPage>0){
            setCurrentPage(currentPage-1)

        }
    }
    const handleNext=()=>{
        if(currentPage  < pages.length-1){
            setCurrentPage(currentPage + 1)
        }
    }
    if (isLoading) return <LoadingSpinner />
    return (
        <>
            <div className='my-10'>
                <Heading title={'Your Dream Scholarship Awaits!'} subtitle={'iscover fully funded, partial, and self-funded scholarships from top universities worldwide.'} ></Heading>
            </div>
            <div>
                <SearchInput handleSearch={handleSearch} setSearch={setSearch} />
            </div>
            {
                !scholarships || scholarships.length <= 0 && <>
                    <p className='text-4xl font-bold   my-5 lg:my-10 text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 '>No Scholarship Found</p>

                </>
            }
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
                {
                    scholarships.map((scholarship) => <ScholarCard key={scholarship._id} scholarship={scholarship}></ScholarCard>)
                }
            </div>

            <div>
            <div className="flex justify-center space-x-1 my-10 dark:text-gray-800">
	<button onClick={handlePev} title="previous" type="button" className="inline-flex items-center bg-purple-500 hover:bg-yellow-300 text-white hover:text-black justify-center w-8 h-8 py-0 border-none rounded-md shadow-md ">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="15 18 9 12 15 6"></polyline>
		</svg>
	</button>
    {
        pages.map(page=><button
            onClick={()=>setCurrentPage(page)}
            type="button" title="Page 1" className={`${currentPage===page? 'inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border-none rounded shadow-md  text-black bg-yellow-300':'inline-flex items-center justify-center w-8 h-8 text-sm font-semibold  rounded shadow-md text-white border-none bg-purple-500'} `}>{page}</button>)
    }
	<button onClick={handleNext} title="next" type="button" className="inline-flex items-center bg-purple-500 hover:bg-yellow-300 text-white hover:text-black justify-center w-8 h-8 py-0 border-none rounded-md shadow-md">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="9 18 15 12 9 6"></polyline>
		</svg>
	</button>
</div>
            </div>

        </>
    );
};

export default AllScholar;