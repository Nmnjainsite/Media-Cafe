import { useParams } from "react-router-dom";
import { videos } from "../../backend/db/videos";
import React from "react";
import SingleProductCard from "./SingleProductCard";
import Footer from "../../components/Footer/Footer";
function SingleProductPage() {
  const { productId } = useParams();

  const getData = (products, productId) => {
    return products.find((product) => product._id === productId);
  };

  const itemData = getData(videos, productId);

  return (
    <div>
      <SingleProductCard videos={itemData} />
      <Footer />
    </div>
  );
}

export default SingleProductPage;
