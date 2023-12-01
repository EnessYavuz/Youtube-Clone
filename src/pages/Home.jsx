import React, { useEffect} from "react";
import HomeCard from "../components/HomeCard";
import Filter from "../components/Filter";
import { useDispatch, useSelector } from "react-redux";
import homeAction from "../redux/actions/HomeData";

function Home() {
  const dispatch=useDispatch();
  const {getVideos} =useSelector(state=>state.getVideos)
  



  useEffect(() => {
    dispatch(homeAction("new"))
  }, [dispatch])
  
  console.log('getVideos',getVideos)
  return (
    <div className="m-3">
      <Filter />
      <div className="flex flex-wrap m-2">


          {
            //Not verilerin bazen gelip bazen gelmeme sorunu oluyor
            //bu sorunu çözmek için ? kullanılıyor varsa gelsin anlamında
            getVideos?.items?.map((video,i)=>(
              <HomeCard video={video} key={i}/>
            ))
          }
        
      </div>
    </div>
  );
}

export default Home;
