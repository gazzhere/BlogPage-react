import Header from "./components/Header";
import "./App.css";
import Blog from "./components/Blog";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
export default function App() {
  const{fetchBlogPost}=useContext(AppContext);
  useEffect(()=>{
    fetchBlogPost();
  },[]);
  return (
   <div className="w-full h-full flex flex-col justify-center items-center">
     <Header/>
    <Blog/>
    <Pagination/> 
   </div>
  );
}
