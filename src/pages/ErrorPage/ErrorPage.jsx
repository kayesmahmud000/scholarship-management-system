import React from 'react';
import PageHelmet from '../../components/PageHelmet';

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <PageHelmet title={'Error Page'}/>
            <div className="text-center p-8  shadow-xl rounded-lg max-w-xl">
                <h1 className="text-6xl font-bold text-purple-500">404</h1>
                <p className="mt-4 text-lg text-gray-400">Sorry, we couldn't find the page you were looking for.</p>
                <div className="mt-6">
                    <p className="text-gray-400">Here are some useful links:</p>
                    <ul className="mt-4">
                        <li><a href="/" className="text-purple-500 hover:underline">Home</a></li>
                        <li><a href="/about" className="text-purple-500 hover:underline">About Us</a></li>
                        <li><a href="/contact" className="text-purple-500 hover:underline">Contact Us</a></li>
                    </ul>
                </div>
                <a href="/contact" className="btn border-none bg-purple-500 text-black font-bold rounded-full 
          hover:bg-yellow-300 hover:text-black transition duration-300 text-center">
                    Contact Support
                </a>
            </div>
        </div>
    );
};

export default ErrorPage;