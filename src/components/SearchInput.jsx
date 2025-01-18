import React from 'react';

const SearchInput = ({setSearch,  handleSearch}) => {
    return (
        <div className="join flex   justify-center my-16">
            
        <input
            type="text"
            placeholder=" By Scholarship Name, University name, and Degree name"
            onChange={(e)=>setSearch(e.target.value)}
            className="input  w-[600px] input-bordered rounded-l-full text-black join-item" />
        <button onClick={handleSearch} className="btn py-3 flex items-center justify-center gap-2 bg-purple-500 text-white font-bold rounded-r-full 
          hover:bg-yellow-300 hover:text-black border-none px-7 transition duration-300 text-center">Search</button>
    </div> 
    );
};

export default SearchInput;