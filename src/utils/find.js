const findItem = (products, id) => {
  return products.find((product) => product.id === id);
};

export default findItem;
