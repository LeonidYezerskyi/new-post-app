import axios from "axios";

export const fetchPostOffices = async () => {
  try {
    const response = await axios.get(
      "https://api.novaposhta.ua/v2.0/json/Address/general",
      {
        params: {
          apiKey: "769e4708f8ca021b4293a8d4ab24ff6b",
          modelName: "AddressGeneral",
          calledMethod: "getWarehouses",
          methodProperties: {
            Page: "1",
            Limit: "20",
            Language: "en",
          },
        },
      }
    );

    return response;
  } catch (error) {
    console.error("Error fetching post offices:", error);
  }
};
