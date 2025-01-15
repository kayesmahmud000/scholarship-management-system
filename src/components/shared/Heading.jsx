

const Heading = ({title, subtitle}) => {
    return (
        <div>
            <div>
           {/* <Fade direction='down'>
           <h1 className='text-4xl font-bold  text-center mt-6'>{title}</h1>
           </Fade>
           <Fade direction='up'>
           <p className='text-center  font-semibold'>{subtitle}</p>

           </Fade> */}
            <h1 className='text-4xl font-bold  text-center mt-6'>{title}</h1>
           <p className='text-center max-w-3xl mx-auto font-semibold'>{subtitle}</p>
        </div>
        </div>
    );
};

export default Heading;