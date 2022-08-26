function filterBySearch(products, val) {
  if (val) {
    return products.filter((products) =>
      products.title.toLowerCase().includes(val)
    );
  } else {
    return products;
  }
}

export default filterBySearch;
