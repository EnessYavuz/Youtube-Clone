import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PageContainer from "./containers/PageContainer";

function App() {
  return (
    <>
    <Navbar/>
    <PageContainer>
    <Sidebar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="videos/:id" element={<Detail/>}/>
      <Route path="search/:keyword" element={<Search/>}/>
    </Routes>
    </PageContainer>
    
    </>
  );
}

export default App;
