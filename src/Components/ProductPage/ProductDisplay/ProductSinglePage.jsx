import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";

const ProductSinglePage = () => {
  const [singleProducts, setSingleProducts] = useState({});
  const { id } = useParams();

  
  const fetchData = async () => {
    const products = await axios.get(`https://uborics-backend.herokuapp.com/footwears/${id}`);
    setSingleProducts(products.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(singleProducts);

  return( 
  <div className="main-container">
    
    <img src={singleProducts.imgURL} alt="" />
  </div>
  );
};

export default ProductSinglePage;






// ProductSinglePage
