import axios from "axios";

const detailAction = (id) => async (dispatch) => {
  try {
    const options = {
      method: "GET",
      url: "https://youtube-v311.p.rapidapi.com/videos/",
      params: {
        part: "snippet,contentDetails,statistics",
        id: id,
      },
      headers: {
        "X-RapidAPI-Key": "a135e1f0cdmsh24c7db6c39c8eb4p1b416bjsndba7b0e03ee9",
        "X-RapidAPI-Host": "youtube-v311.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      dispatch({ type: "GET_VIDEO", payload: response.data });
    } catch (error) {
      console.error(error);
    }
  } catch (error) {
    console.log(error);
  }
};
export default detailAction;
