import React from 'react';
import Heading from '../shared/Heading';

const ReviewSection = () => {
    const reviews = [
        {
            id: 1,
            name: 'John Doe',
            role: 'Student, Medical Scholarship',
            review: 'I found the perfect scholarship for my medical studies through this platform. The process was simple, and the support was great. Highly recommended!',
            image: 'https://randomuser.me/api/portraits/men/1.jpg'
        },
        {
            id: 2,
            name: 'Jane Smith',
            role: 'Engineering Student',
            review: 'This scholarship platform saved me so much time! I could easily apply to several scholarships and track my progress. It made my application process a breeze.',
            image: 'https://randomuser.me/api/portraits/women/2.jpg'
        },
        {
            id: 3,
            name: 'Michael Johnson',
            role: 'Architecture Student',
            review: 'The website is very user-friendly. I applied for a fully funded scholarship, and I received updates at every step. The process was smooth and efficient!',
            image: 'https://randomuser.me/api/portraits/men/3.jpg'
        },
        {
            id: 4,
            name: 'Emily Davis',
            role: 'Computer Science Scholar',
            review: 'The platform is a game-changer. It made my scholarship search so much easier and helped me find numerous opportunities tailored to my field. Great experience!',
            image: 'https://randomuser.me/api/portraits/women/4.jpg'
        },
        {
            id: 5,
            name: 'Chris Lee',
            role: 'Law Student',
            review: 'I was able to apply for multiple scholarships without any hassle. The application process was straightforward, and I received confirmation on every step. Highly recommended!',
            image: 'https://randomuser.me/api/portraits/men/5.jpg'
        },
        {
            id: 6,
            name: 'Sophia Martinez',
            role: 'Business Administration Student',
            review: 'Finding scholarships for business studies had always been overwhelming. Thanks to this platform, I now feel confident about my scholarship search. The updates were timely and informative.',
            image: 'https://randomuser.me/api/portraits/women/6.jpg'
        }
    ];

    return (
        <div className="my-16 px-4 md:px-10 lg:px-20">
            <Heading title={'What Our Users Are Saying'} subtitle={'Hear from students who have successfully applied for scholarships using our platform.'}/>
           
            <div className="grid my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {reviews.map((review) => (
                    <div key={review.id} className="p-6 border border-gray-300 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full mr-4" />
                            <div>
                                <h3 className="text-xl font-semibold ">{review.name}</h3>
                                <p className="text-sm text-gray-500">{review.role}</p>
                            </div>
                        </div>
                        <p className="">{review.review}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewSection;
