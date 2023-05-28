import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../fature/savice/cardSlide";

const Prodect = (props) => {
  // console.log(props);
  const { id, image, price, title, decription } = props;

  const dispatch = useDispatch();

  return (
    <div className='mt-28'>
      <div className='flex flex-col w-72 rounded-md    shadow-lg p-7 '>
        <img className='max-w-[130px] mx-auto h-[180px]' src={image} alt='' />
        <div className=' flex flex-col gap-2'>
          <h2>{title.substring(0, 20)}...</h2>
          <p>${price}</p>
          <button
            onClick={() => dispatch(addToCart(props))}
            className=' bg-violet-600 text-white px-4 py-2 font-semibold text-sm rounded-sm'
          >
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prodect;
