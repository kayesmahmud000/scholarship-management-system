import React from 'react';
import Heading from '../shared/Heading';

const ApplicationProcess = () => {
    return (
       <div className='max-w-5xl mx-auto'>
        <Heading title={'How to Apply for Scholarships'} subtitle={'A simple, 3-step process to secure your scholarship.'}/>
          <div className="my-4">
          <div className="">
                <div className="">
                    <h3 className="text-2xl font-semibold mb-4 ">Step 1: Browse Scholarships</h3>
                    <p className="text-lg ">
                        Start by exploring a wide range of scholarships tailored to your field of interest. Filter scholarships by location, discipline, and funding type. You can easily browse through opportunities for fully funded, partial, and self-funded scholarships from top universities worldwide.
                    </p>
                </div>
                <div className="">
                    <h3 className="text-2xl font-semibold mb-4">Step 2: Submit Your Application</h3>
                    <p className="text-lg ">
                        Once you’ve found the right scholarship, apply directly through our platform. Upload necessary documents, including academic records, letters of recommendation, and your personal statement. Our platform guides you step-by-step through the application form, making it easy to complete and submit.
                    </p>
                </div>
                <div className="">
                    <h3 className="text-2xl font-semibold mb-4">Step 3: Track Your Status</h3>
                    <p className="text-lg ">
                        After submission, you can track the progress of your application. Stay informed about important updates, deadlines, and notifications. You’ll receive timely alerts about whether your application has been reviewed, shortlisted, or accepted.
                    </p>
                </div>
            </div>
        </div>
       </div>
    );
};

export default ApplicationProcess;
