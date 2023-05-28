import React, { useEffect, useState } from "react";
import { Input } from "@mantine/core";
import { BsFillHandbagFill } from "react-icons/bs";
import { Badge } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [search, setSearch] = useState([]);
  const [filterdata, setFilterdata] = useState([]);
  const [currentdata, setCurrentdata] = useState([]);

  const nav = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setCurrentdata(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const filterProducts = currentdata.filter((data) =>
    data.title.toLowerCase().includes(search)
  );

  const showfilterData = (e) => {
    e.preventDefault();
    nav("/search", { state: filterProducts });
  };

  return (
    <div className='flex justify-around  bg-white w-full shadow-md p-5 items-center'>
      <Link to={"/"}>
        <h2 className='uppercase text-2xl text-violet-800 cursor-pointer font-bold '>
          Comfity
        </h2>
      </Link>
      <div className='flex items-center gap-5'>
        <form className='flex  items-center space-x-5' action=''>
          <Input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            variant='filled'
            placeholder='Search'
          />
          <button
            className='border-violet-600 border-2 text-sm py-2 hover:text-white hover:bg-violet-600 duration-300 font-semibold px-5 rounded-md '
            onClick={showfilterData}
          >
            Search
          </button>
        </form>

        <Link to={"/addtocart"}>
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
