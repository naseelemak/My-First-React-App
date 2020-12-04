import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

function Product() {
  const [product, setProduct] = useState(null);

  const { id } = useParams();
  const url = `https://5fc8b0fe2af77700165adbc4.mockapi.io/api/v1/products/${id}`;

  let content = null;

  useEffect(() => {
    Axios.get(url).then((response) => {
      setProduct(response.data);
    });
  }, [url]);

  if (product) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
        <div>
          <img src={product.images[0].imageUrl} alt={product.name} />
        </div>
        <div className="text-xl font-bold mb-3">$ {product.price}</div>
        <div>{product.description}</div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Product;
