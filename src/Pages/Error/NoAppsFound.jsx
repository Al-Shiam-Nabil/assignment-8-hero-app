

const NoAppsFound = ({ setInputField}) => {

    const handleClearBtn=()=>{
setInputField('')
    }
   
    return (
        <div className='grid place-items-center my-[80px] space-y-5'>
     

            <h2 className='text-4xl font-semibold text-gray-800'>OPPS!! APP NOT FOUND</h2>
            <p className='text-gray-600'>The App you are requesting is not found on our system.  please try another apps</p>

        <button onClick={handleClearBtn} className='flex justify-center items-center gap-1 bg-linear-to-r from-[#632EE3] to-[#9F62F2] btn text-white font-semibold text-base hover:scale-105 transition ease-in-out duration-300'>Show All Apps</button>
        </div>
    );
};

export default NoAppsFound;