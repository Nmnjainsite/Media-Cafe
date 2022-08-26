const filterByCategory = (products, category) => {
  switch (category) {
    case "FILTER_BY_CODING":
      return products.filter((products) => products.category === "coding");
    case "FILTER_BY_FINANCE":
      return products.filter((products) => products.category === "Finance");
    case "FILTER_BY_TED":
      return products.filter((products) => products.category === "TEDx");
    case "FILTER_BY_VIDEOGRAPHY":
      return products.filter((products) => products.category === "videography");
    default:
      return products;
  }
};

export default filterByCategory;
