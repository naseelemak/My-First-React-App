import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { useAxiosGet } from "../Hooks/HttpRequest";

function Product() {
  // create dynamic URL for product page
  const { id } = useParams();
  const url = `https://5fc8b0fe2af77700165adbc4.mockapi.io/api/v1/products/${id}`;

  let product = useAxiosGet(url);

  let content = null;

  // display error message if data retrieval fails
  if (product.error) {
    content = (
      <p className="flex justify-center mt-3">
        There was an error. Please refresh page or try again later.
      </p>
    );
  }

  // display loading icon when data form API is still being retrieved
  if (product.loading) {
    content = <Loader />;
  }

  // display data if it exists
  if (product.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
        <div>
          <img src={product.data.images[0].imageUrl} alt={product.data.name} />
        </div>
        <div className="text-xl font-bold mb-3">$ {product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Product;
