import { useEffect, useState } from "react";
import { baseUrl, allProducts, categoryWise, pageWise } from "../urls";

const useProduct = (url) => {
  const [productData, setProductData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

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
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch request was canceled");
        } else {
          setError(err.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    // clean-up function
    return () => {
      controller.abort();
    };
  }, [url]);

  return { productData, error, loading };
};

export default useProduct;
