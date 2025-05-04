import users from "../dB/dB.json";

const Quote = () => {
 

  return (
    <>
      <div className="quote min-h-[100vh] w-[100%] flex flex-col gap-4 md:p-4 p-2 ">
        {users && users.length>0 ? users.map((ele)=>
           <div key={ele.id} className="card text-white bg-gray-800 py-3 md:py-6 px-4 sm:px-6 md:px-10 rounded-lg sm:m-2 md:m-4">
          <h1 className="md:text-xl sm:text-lg text-sm font-bold mb-2 md:mb-4">{ele.quote}</h1>
          <p className="text-center text-gray-500 text-sm sm:text-lg font-semibold">{ele.author}</p>
    </div>)
        
        : <p className="text-center">No Data Found</p>}
      </div>
    </>
  );
};

export default Quote;
