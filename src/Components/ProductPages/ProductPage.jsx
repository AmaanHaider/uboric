import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import ProductDisplay from "./ProductDisplay";
import "./styles/ProductPage.css"
import Reviewsection from "../Reviewsection/Reviewsection";

const ProductPage = () => {
  return (
    <>
    <div className="container">
    <div className="productcontainer">
        <Sidebar/>
        <ProductDisplay/>
      </div>
      <div className="reviewsection">
        <Reviewsection/>
      </div>


    </div>
    
    </>
  );
};

export default ProductPage;
