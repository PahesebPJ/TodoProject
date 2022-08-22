import { useEffect, useState } from "react";
import axios from "../api/axios";

const useDel = (url) => {
  const [response, setResponse] = useState();

  const delData = async () => {
    const response = await axios.delete(url);
    setResponse(response);
  };

  useEffect(() => {
    delData();
  }, []);

  return { response };
};

export default useDel;
