
const Quote = () => {
  const quotes = [
    {
      id:1,
      quotes:"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      author: "Adam Scott"
    },
    {
      id:2,
      quotes:"We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
      author: "Adelle Davis"
    },
    {
      id:3,
      quotes:"Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.",
      author: "Albert Einstein"
    },
    {
      id:4,
      quotes:"Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth.",
      author: "Alice May Brock"
    },
    {
      id:5,
      quotes:"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      author: "Adam Scott"
    },
    {
      id:6,
      quotes:"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      author: "Adam Scott"
    },
    {
      id:7,
      quotes:"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      author: "Adam Scott"
    },
    {
      id:8,
      quotes:"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      author: "Adam Scott"
    },
    {
      id:9,
      quotes:"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      author: "Adam Scott"
    },
    {
      id:10,
      quotes:"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      author: "Adam Scott"
    },
    {
      id:11,
      quotes:"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      author: "Adam Scott"
    },
    {
      id:12,
      quotes:"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      author: "Adam Scott"
    },
    {
      id:13,
      quotes:"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      author: "Adam Scott"
    },
    {
      id:14,
      quotes:"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      author: "Adam Scott"
    },
    {
      id:15,
      quotes:"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      author: "Adam Scott"
    },
    {
      id:16,
      quotes:"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      author: "Adam Scott"
    },
    {
      id:17,
      quotes:"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      author: "Adam Scott"
    },
    {
      id:18,
      quotes:"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      author: "Adam Scott"
    },
    {
      id:19,
      quotes:"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      author: "Adam Scott"
    },
    {
      id:20,
      quotes:"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      author: "Adam Scott"
    },
    {
      id:21,
      quotes:"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      author: "Adam Scott"
    },
  ]
  

  return (
    <>
      <div className="quote min-h-[100vh] w-[100%] flex flex-col gap-4 md:p-4 p-2 ">
        {quotes && quotes.length>0 ? quotes.map((ele)=>
           <div key={ele.id} className="card text-white bg-gray-800 py-3 md:py-6 px-4 sm:px-6 md:px-10 rounded-lg sm:m-2 md:m-4">
          <h1 className="md:text-xl sm:text-lg text-sm font-bold mb-2 md:mb-4">{ele.quotes}</h1>
          <p className="text-center text-gray-500 text-sm sm:text-lg font-semibold">{ele.author}</p>
    </div>)
        
        : <p className="text-center">No Data Found</p>}
      </div>
    </>
  );
};

export default Quote;
