import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../fature/savice/cardSlide";

const Search = () => {
  const datafromSearchbar = useLocation();
  const items = datafromSearchbar.state;
  const dispatch = useDispatch();
  // console.log(item);
  return (
    <div className="flex items-center mx-auto flex-wrap gap-3 w-[80%]">
      {items.map((i) => (
        <div
          key={i.id}
          className='flex flex-col w-72 rounded-md    shadow-lg p-7 '
        >
          <img
            className='max-w-[130px] mx-auto h-[180px]'
            src={i.image}
            alt=''
          />
          <div className=' flex flex-col gap-2'>
            <h2>{i.title.substring(0, 20)}...</h2>
            <p>${i.price}</p>
            <button
              onClick={() => dispatch(addToCart(i))}
              className=' bg-violet-600 text-white px-4 py-2 font-semibold text-sm rounded-sm'
            >
              Add to card
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Search;
