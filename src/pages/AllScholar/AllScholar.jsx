import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import ScholarCard from '../../components/AllScholars/ScholarCard';
import Heading from '../../components/shared/Heading';

const AllScholar = () => {
    const { data: scholarships = [] } = useQuery({
        queryKey: ['scholarships'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/scholars`)

            console.log(data)
            return data
        }
    })
    // useEffect(()=>{
    //     fetch(`${import.meta.env.VITE_API_URL}/scholars`)
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    // },[])

    return (
        <>
        <div className='my-10'> 
            <Heading title={'Your Dream Scholarship Awaits!'} subtitle={'iscover fully funded, partial, and self-funded scholarships from top universities worldwide.'} ></Heading>
        </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
                {
                    scholarships.map((scholarship) => <ScholarCard key={scholarship._id} scholarship={scholarship}></ScholarCard>)
                }
            </div>
        </>
    );
};

export default AllScholar;