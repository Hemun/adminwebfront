import { useState, useEffect } from "react";

const useApi = (url: string) => {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("url ", url);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        // console.log("response ", response);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { datas: datas as any, loading };
};

export default useApi;
