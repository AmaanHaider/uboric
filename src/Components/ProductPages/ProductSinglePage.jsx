import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./styles/ProductSinglePage.css";

const ProductSinglePage = () => {
  const [singleProducts, setSingleProducts] = useState({});
  const [related, setRelated] = useState([]);
  const { id } = useParams();
  const fetchData = async () => {
    const products = await axios.get(
      `https://uborics-backend.herokuapp.com/footwears/${id}`
    );
    setSingleProducts(products.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const relatedData = async () => {
      const relatedProducts = await axios.get(
        `https://uborics-backend.herokuapp.com/footwears`
      );
      setRelated(relatedProducts.data);
    };
    relatedData();
  }, []);
  // console.log(singleProducts);
  console.log("related", related);

  return (
    <>
      <div className="SinglePagecontainer">
        <div className="productImage">
          <img src={singleProducts.imgURL} alt="" />
        </div>
        <div className="productDetails">
          <h3>{singleProducts.title}</h3>
          <br />
          <p>₹{singleProducts.price}(Inclusive of all taxes)</p>
          <div className="badges"></div>

          <select value="Choose " id="options">
            <option value="Choose an option">Choose an option</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <div className="purchasediv">
            <button>Buy now</button>
            <input type="number" min="1" name="quantity" id="" />
            <button>Add to Cart</button>
          </div>
          <button> SEND ENQUIRY</button>

          <div className="details">
            <p>{}</p>
          </div>
        </div>
      </div>

      <h1>Related products</h1>
      <div className="relatedProducts">
        {related.map((e) => {
          return (
            <Link  className="relatedcards" to={`/footwear/${e.id}`}>
              <img src={e.imgURL} alt="" />
              <h3>{e.title}</h3>
              <h3>₹{e.price}</h3>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ProductSinglePage;

// ProductSinglePage
