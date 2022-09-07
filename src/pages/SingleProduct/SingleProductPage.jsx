import { useParams } from "react-router-dom";
import { videos } from "../../backend/db/videos";
import React from "react";
import SingleProductCard from "./SingleProductCard";
function SingleProductPage() {
  const { productId } = useParams();

  const getData = (products, productId) => {
    return products.find((product) => product._id === productId);
  };

  const itemData = getData(videos, productId);

  return (
    <>
      <SingleProductCard videos={itemData} />
    </>
  );
}

export default SingleProductPage;
