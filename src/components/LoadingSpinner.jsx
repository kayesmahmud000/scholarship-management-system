import { DotLoader } from "react-spinners";


const LoadingSpinner = () => {
    return (
        <div
        className={` min-h-screen items-center justify-center}
        flex 
        flex-col 
        justify-center 
        items-center `}
      >
        <DotLoader size={80} color='white' />
        {/* <ScaleLoader size={100} color='lime' /> */}
      </div>
    );
};

export default LoadingSpinner;