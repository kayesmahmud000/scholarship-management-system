import PageHelmet from "../../components/PageHelmet";
import Heading from "../../components/shared/Heading";
import AboutImg from "../../assets/about1.jpg"
import AboutImg1 from '../../assets/about2.jpg'

const AboutPage = () => {
    return (
        <div>
             <div className=' ' >
           <PageHelmet title={"About"}/>
        <div className="py-5 ">
         <Heading title={'About Us'} subtitle={''}/>
         </div>
       <div className="hero ">
           <div className="hero-content flex-col gap-5  justify-between lg:flex-row">
               <img
                   src={AboutImg1}
                   className="lg:w-3/6 rounded-lg shadow-2xl" />
               <div className=' space-y-3'>
                   <h1 className="text-3xl  font-bold">Scholar Track Pro</h1>
                 <h2 className="text-xl font-semibold">Empowering Dreams Through Education</h2>
                   <p className="py-6 space-y-5">
                   Welcome to <span className="text-yellow-300 font-semibold">Scholar Track Pro</span>  , we believe that every student deserves the opportunity to pursue their education without financial obstacles. Our platform is designed to bridge the gap between aspiring students and scholarship providers, ensuring a seamless and transparent process for all.
                   </p>
                 
               </div>
           </div>
       </div>
      <div className='max-w-7xl mx-auto'>
      <div className='my-10 text-center lg:text-start'>
           <h2 className=' text-4xl font-bold text-center lg:text-start'>Who We Are </h2>
           <p className='my-5' >
           <span className="text-yellow-300 font-semibold">Scholar Track Pro</span>  is an innovative Scholarship Management System that simplifies the process of applying for and managing scholarships. Whether you're a student seeking financial aid, an administrator managing applications, or an organization offering scholarships, our platform streamlines the entire process efficiently.
           </p>
           <br />
           <p>Our team believes in the power of stories to inspire, educate, and bring people together. From the timeless wisdom of classic literature to the creativity of modern fiction, every book has a story waiting to be discovered — and we are here to help you find it.</p>
       </div>
       <div className='my-10 text-center flex gap-10 lg:text-start'>
      <div>
      <h2 className=' text-4xl font-bold text-center lg:text-start'>Our Mission</h2>
           <p className='mt-5' >
         Our mission is to provide a user-friendly and accessible platform that makes scholarship opportunities available to students worldwide. We aim to::
           </p>
           <ul>
    <li> ✔️ Simplify the application process for students.
    </li>
    <li>✔️ Ensure transparency in scholarship distribution.</li>
    <li> ✔️ Support institutions in managing applications seamlessly.</li>
    
    <li>✔️ Connect sponsors with deserving candidates.</li>
</ul>
      </div>
<img
                   src={AboutImg}
                   className="lg:w-[500px] rounded-lg shadow-2xl" />
          
       </div>
       <div className='my-10 text-center lg:text-start'>
           <h2 className=' text-4xl font-bold text-center mb-5 lg:text-start'> What We Offer </h2>
         
           <ul>
    <li> <span className="text-yellow-300 font-semibold">Scholarship Exploration </span> – Browse through a wide range of scholarships tailored to your needs.</li>
    <li> <span className="text-yellow-300 font-semibold"> Easy Application Process</span> O – Submit applications effortlessly in a few simple steps.</li>
    <li> <span className="text-yellow-300 font-semibold"> Application Tracking</span>  – Monitor the progress of your submissions in real-time.
    </li>
    <li> <span className="text-yellow-300 font-semibold"> Secure & Efficient Management </span> – Institutions and sponsors can manage applications and awards hassle-free.</li>
    <li> <span className="text-yellow-300 font-semibold"> Seamless Communication</span> – Stay informed with updates and notifications.</li>
</ul>
          
       </div>
       <div className='my-10 text-center lg:text-start'>
           <h2 className=' text-4xl font-bold text-center mb-5 lg:text-start'> Why Choose Scholar Track Pro? </h2>
         
           <ul>
    <li> ✅ User-Friendly Interface – Designed for students, administrators, and scholarship providers.</li>
    <li> ✅ Real-time Updates – Get instant notifications about your application status.</li>
    <li> ✅ Data Security – We ensure that all user data remains secure and confidential.
    </li>
    <li> ✅ Comprehensive Support – Our team is dedicated to assisting you at every step.</li>
   
</ul>
          
       </div>
       <div className='my-10 text-center lg:text-start'>
           <h2 className=' text-4xl font-bold text-center lg:text-start'> Join Us Today </h2>
           <p className='my-5' >
           At
           <span className="text-yellow-300 font-semibold"> Scholar Track Pro</span> cwe are committed to shaping a future where education is accessible to all. Whether you're a student looking for financial aid or an organization wanting to make a difference, our platform is here to support you.</p>

           <p className="font-semibold">📩 Get Started Today & Turn Your Academic Dreams Into Reality!

</p>
       </div>
      </div>
   </div>
        </div>
    );
};

export default AboutPage;