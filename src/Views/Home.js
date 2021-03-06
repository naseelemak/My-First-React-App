import React from "react";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequest";

function Home() {
  const url = `https://5fc8b0fe2af77700165adbc4.mockapi.io/api/v1/products?page=1&limit=10`;

  let products = useAxiosGet(url);

  let content = null;

  // display error message if data retrieval fails
  if (products.error) {
    content = (
      <p className="flex justify-center mt-3">
        There was an error. Please refresh page or try again later.
      </p>
    );
  }

  // display loading icon when data form API is still being retrieved
  if (products.loading) {
    content = <Loader />;
  }

  // display data if it exists
  if (products.data) {
    content = products.data.map((product) => (
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    ));
  }

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Featured Items</h1>

      {content}
    </div>
  );
}

export default Home;
