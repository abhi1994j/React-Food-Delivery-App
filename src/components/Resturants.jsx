import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdRestaurant } from "react-icons/md";
import { data } from "../dB/data";

const Resturants = () => {
  console.log(data);
  return (
    <>
      <div className="resturants min-h-[100vh] w-[100%] p-6 ">
        <div className="w-full">
          <div className="p-6 md:p-8 w-full flex-col sm:flex-row gap-4 sm:gap-0 flex justify-between items-center">
            <input
              className="px-3 py-2 rounded-sm border border-gray-300 text-gray-400 placeholder:text-gray-400"
              type="search"
              name=""
              value={""}
              onChange={""}
              placeholder="Search restaurants..."
            />
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <span className="text-sm md:text-[16px]">Minimum Rating:</span>
              <input
                className="border rounded-sm border-gray-200 w-20 px-2 py-2 outline-0"
                type="numbrt"
                name=""
                value={""}
                onChange={""}
              />
            </div>
          </div>
          <div className="w-full my-4 flex flex-wrap items-center [align-content:center] gap-6">
            {data.map((item) => {
              return (
                <div key={item._id.$oid} className="card w-[80%] md:w-[30%] nax-w-lg overflow-hidden rounded-md shadow-md bg-white">
                  {/* <div className=" w-full"> */}
                    <div className="w-full px-6 py-4">
                      <div className="flex gap-2 items-center w-full mb-2">
                        <p className="text-lg font-semibold">
                          {item.name}{" "}
                        </p>
                        <span className="flex font-bold text-xl text-yellow-400">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </span>
                      </div>
                      <p className="flex gap-2 items-center mt text-gray-500 mb-2">
                        <IoLocationSharp />{" "}
                        <span className="text-sm">{item.address}, {item["address line 2"]}</span>{" "}
                      </p>
                      <p className="text-gray-500 text-sm mb-4">{item.outcode} {item.postcode} </p>
                    </div>
                    <div className="w-full h-full bg-gray-100 px-6 py-4">
                      <p className="flex items-center gap-2 mb-2 text-green-500 text-[16px]">
                        <MdRestaurant /> <span>{item.type_of_food}</span>
                      </p>
                      <a href="" className="text-blue-400 hover:underline">
                        Visit Menu
                      </a>
                    </div>
                  {/* </div> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resturants;
