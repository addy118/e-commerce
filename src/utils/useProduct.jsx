import { useEffect, useState } from "react";
import { baseUrl, allProducts, categoryWise, pageWise } from "../urls";

const useProduct = (url) => {
  const [productData, setProductData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, { mode: "cors" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        setProductData(data);
        // console.log(data.products);
        return data;
      })
      .catch((err) => {
        setError(err.message);
        // console.log(err.message);
        return err.message;
      })
      .finally(() => {
        setLoading(false);
      });
  });

  return { productData, error, loading };
};

export default useProduct;
