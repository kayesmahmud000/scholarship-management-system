import CheckOutFrom from "./CheckOutFrom";

const Payment = () => {
    return (
        <div className="flex justify-center text-center items-center min-h-screen ">
       <div className="flex flex-col max-w-md shadow-2xl sm:p-10 bg-[#2C2536] p-8 rounded-lg shadow-lg border border-gray-600">
       <h2 className="text-2xl font-bold mb-4">Application Payment</h2>
        <p className="text-lg mb-4">Pay the application fee to proceed with the application.</p>
        <div>
            <CheckOutFrom/>
        </div>
       </div>
    </div>
    );
};

export default Payment;