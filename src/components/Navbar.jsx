import React from "react";
import { Input } from "@mantine/core";
import { BsFillHandbagFill } from "react-icons/bs";
import { Badge } from "@mantine/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <div className='flex justify-around  bg-white w-full shadow-md p-5 items-center'>
      <Link to={"/"}>
        <h2 className='uppercase text-2xl text-violet-800 cursor-pointer font-bold '>
          Comfity
        </h2>
      </Link>
      <div className='flex items-center gap-5'>
        <Input type='text' variant='filled' placeholder='Search' />

        <Link to={'/addtocart'}>
          <div className='relative'>
            <Badge className='absolute bottom-6 ring-3' color='violet'>
              {cartItems.length}
            </Badge>
            <BsFillHandbagFill className='text-3xl  text-violet-800' />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
