import axios from "axios";
import React, { useEffect, useState } from "react";
import Prodect from "./Prodect";
import Loading from "./Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProducts(data);
        console.log(data)
        setIsloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  if (isloading) {
    return <Loading />;
  }

  return (
    <div className='flex flex-wrap gap-10 justify-center'>
      {products?.map((product) => {
        return <Prodect key={product.id} {...product} />;
      })}
    </div>
  );
};

export default Products;
