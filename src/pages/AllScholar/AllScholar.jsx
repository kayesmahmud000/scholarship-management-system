
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import ScholarCard from '../../components/AllScholars/ScholarCard';
import Heading from '../../components/shared/Heading';
import SearchInput from '../../components/SearchInput';
import LoadingSpinner from '../../components/LoadingSpinner';

const AllScholar = () => {
    const [search, setSearch] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8;

    // Fetching data using React Query
    const { data: scholarshipsCollection = {}, isLoading } = useQuery({
        queryKey: ['scholarships', searchQuery, currentPage, itemsPerPage],
        queryFn: async () => {
            const { data } = await axios.get(
                `${import.meta.env.VITE_API_URL}/scholars?search=${searchQuery}&page=${currentPage}&limit=${itemsPerPage}`
            );
            return data;
        },
        keepPreviousData: true, // Keep the previous data while fetching new data
    });

    const handleSearch = () => {
        setSearchQuery(search);
        setCurrentPage(0); // Reset to the first page on new search
    };

    const totalPages = scholarshipsCollection?.totalPages || 0;

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    if (isLoading) return <LoadingSpinner />;

    return (
        <>
            <div className="my-10">
                <Heading
                    title="Your Dream Scholarship Awaits!"
                    subtitle="Discover fully funded, partial, and self-funded scholarships from top universities worldwide."
                />
            </div>
            <div>
                <SearchInput handleSearch={handleSearch} setSearch={setSearch} />
            </div>
            {!scholarshipsCollection?.data?.length && (
                <p className="text-4xl font-bold my-5 lg:my-10 text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    No Scholarship Found
                </p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                {scholarshipsCollection?.data?.map((scholarship) => (
                    <ScholarCard key={scholarship._id} scholarship={scholarship} />
                ))}
            </div>
            {totalPages > 1 && (
                <div className="flex justify-center space-x-1 my-10 dark:text-gray-800">
                    <button
                        onClick={handlePrev}
                        title="previous"
                        type="button"
                        className="inline-flex items-center bg-purple-500 hover:bg-yellow-300 text-white hover:text-black justify-center w-8 h-8 py-0 border-none rounded-md shadow-md"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4"
                        >
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    {[...Array(totalPages).keys()].map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            type="button"
                            title={`Page ${page + 1}`}
                            className={`${
                                currentPage === page
                                    ? 'inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border-none rounded shadow-md text-black bg-yellow-300'
                                    : 'inline-flex items-center justify-center w-8 h-8 text-sm font-semibold rounded shadow-md text-white border-none bg-purple-500'
                            }`}
                        >
                            {page + 1}
                        </button>
                    ))}
                    <button
                        onClick={handleNext}
                        title="next"
                        type="button"
                        className="inline-flex items-center bg-purple-500 hover:bg-yellow-300 text-white hover:text-black justify-center w-8 h-8 py-0 border-none rounded-md shadow-md"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4"
                        >
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            )}
        </>
    );
};

export default AllScholar;
