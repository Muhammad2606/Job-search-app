import axios from "axios";

const url = "https://jsearch.p.rapidapi.com/search";

const options = {
  params: {
    query: "Python developer in Texas, USA",
    page: "1",
    num_pages: "1",
  },
  headers: {
    "X-RapidAPI-Key": "c198456b72msh84672f2444a4876p16fe3cjsn0b5d462d1315",
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  },
};

export const api = {
  async fetch() {
    try {
      const response = await axios.get(url, options);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },
};

export default api;
