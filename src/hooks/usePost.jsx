import { useEffect, useState } from "react";
import axios from "../api/axios";

const usePost = (url, data) => {
  const [response, setResponse] = useState();

  const postData = async () => {
    const response = await axios.post(url, data);
    setResponse(response);
  };

  useEffect(() => {
    postData();
  }, []);

  return { response };
};

export default usePost;
