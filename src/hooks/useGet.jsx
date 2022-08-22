import { useEffect, useState } from "react";
import axios from "../api/axios";

const useGet = (url) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(url);
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return { data };
};

export default useGet;
