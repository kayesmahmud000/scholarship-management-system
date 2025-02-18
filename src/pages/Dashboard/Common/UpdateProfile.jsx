import React from 'react';

const UpdateProfile = () => {
    return (
        <div>
        <div className='lg:min-h-[730px]'>
         <div className='max-w-3xl  mx-auto my-10 p-5 py-10 flex flex-col rounded-lg justify-center items-center gap-6 border '>
             <h1 className='text-3xl font-bold text-center'> Update Your Information </h1>
             <div className="card bg-base-100 w-full max-w-xl shrink-0 ">

             <form   className="card-body">
                 <div className="form-control">
                     <label className="label">
                         <span className="label-text text-lg">Name</span>
                     </label>
                     <input type="text"
                      placeholder="name"
                      name="name"
                       className="input input-bordered" required />
                 </div>
                 <div className="form-control">
                     <label className="label">
                         <span className="label-text text-lg">Photo URL</span>
                     </label>
                     <input type="text" 
                     name="photo"
                     placeholder="photo url" 
                     className="input input-bordered" required />
                 </div>
                 <div className="form-control mt-6">
                 <button className='btn bg-[#A020F0] px-4 text-white rounded-full'> Update Information</button>
                 </div>
             </form>
           
           
         </div>
            

         </div>
         
     </div>
     </div>
    );
};

export default UpdateProfile;