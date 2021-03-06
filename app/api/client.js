import { create } from "apisauce";
import { useState } from "react";

const client = (endpoint) => {
  const [data, setData] = useState([]);
  const apiClient = create({
    baseURL: "http://yourIpAddress:9000/api",
  });

  const getListings = () => apiClient.get(endpoint);

  const request = async () => {
    const response = await getListings();
    if (!response.ok) return console.log("error in response");
    setData(response.data);
  };
  return { data, request };
};
export default client;
