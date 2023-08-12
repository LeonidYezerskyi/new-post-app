import axios from "axios";

export const getPostOffices = async (city = "") => {
  const { data } = await axios.post("https://api.novaposhta.ua/v2.0/json/", {
    apiKey: "8471b5b7a27be0e5969b94d3c895d7cb",
    modelName: "Address",
    calledMethod: "getWarehouses",
    methodProperties: {
      CityName: `${city}`,
      Language: "ua",
    },
  });
  return data;
};
