import DotLoader from "react-spinners/DotLoader";
import PageHelmet from "./PageHelmet";

const LoadingSpinner = () => {
  return (
    <div
      className="
        min-h-screen 
        flex 
        flex-col 
        justify-center 
        items-center
      "
    >
      <PageHelmet title={'Loading..'} />
      <DotLoader size={80} color="purple" />
      {/* <ScaleLoader size={100} color="lime" /> */}
    </div>
  );
};

export default LoadingSpinner;
