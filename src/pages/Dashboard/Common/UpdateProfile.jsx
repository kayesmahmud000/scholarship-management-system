import React from 'react';

const UpdateProfile = () => {
    return (
        <div>
        <div className='lg:min-h-[730px]'>
         <div className='max-w-3xl  mx-auto my-10 p-5 py-10 flex flex-col rounded-lg justify-center items-center gap-6 bg-[#1e172b]  '>
             <h1 className='text-3xl font-bold text-center'> Update Your Information </h1>
             <div className="card w-full max-w-xl shrink-0 ">

             <form   className="card-body">
                 <div className="form-control">
                     <label className="label">
                         <span className="label-text text-white text-lg">Name</span>
                     </label>
                     <input type="text"
                      placeholder="name"
                      name="name"
                       className="input input-bordered" required />
                 </div>
                 <div className="form-control">
                     <label className="label">
                         <span className="label-text text-white text-lg">Photo URL</span>
                     </label>
                     <input type="text" 
                     name="photo"
                     placeholder="photo url" 
                     className="input input-bordered" required />
                 </div>
                 <div className="form-control mt-6">
                 <button
                    className="mt-6 bg-purple-600 hover:bg-yellow-400 hover:text-black text-white font-semibold py-2 px-6 rounded-full transition duration-300"
                >
                   Update Information
                </button>
                
                 </div>
             </form>
           
           
         </div>
            

         </div>
         
     </div>
     </div>
    );
};

export default UpdateProfile;