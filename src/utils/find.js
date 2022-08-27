const getProductDetails = (products, id) => {
  return products.find((product) => product._id === id);
};

export default getProductDetails;
