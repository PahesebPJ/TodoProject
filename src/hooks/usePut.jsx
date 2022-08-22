import { useEffect, useState } from "react";
import axios from "../api/axios";

const usePut = (url, data) => {
  const [response, setResponse] = useState();

  const putData = async () => {
    const response = await axios.put(url, data);
    setResponse(response);
  };

  useEffect(() => {
    putData();
  }, []);

  return { response };
};

export default usePut;
