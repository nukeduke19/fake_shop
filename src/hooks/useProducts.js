import { useEffect, useState } from "react";
import { getProducts } from "./../services/getProducts";

export default function useProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await getProducts();
      setData(data);
    } catch (error) {
      console.log("error occured while fetching the data", error);
    }
  };
  return data;
}
