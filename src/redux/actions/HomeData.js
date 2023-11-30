import axios from "axios";

const homeAction =(data)=>async(dispatch) =>{
    try {
        const options = {
            method: 'GET',
            url: 'https://youtube-v311.p.rapidapi.com/playlistItems/',
            params: {
              part: 'snippet',
              playlistId: 'PLOU2XLYxmsILMUsDRrVoRRlL29p8LHFIT',
              q:data,
              maxResults: '20'
            },
            headers: {
              'X-RapidAPI-Key': 'a135e1f0cdmsh24c7db6c39c8eb4p1b416bjsndba7b0e03ee9',
              'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
            dispatch({type:'GET_VIDEOS',payload:response.data})
            
          } catch (error) {
              console.error(error);
          }
        
    } catch (error) {
        console.log(error)
    }
}
export default homeAction;