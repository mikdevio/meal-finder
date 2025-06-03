import { Grid } from "@mui/material";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const categories_url = import.meta.env.VITE_THEMEALDB_CATEGORIES_URL;
  
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  console.log(data);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    setLoading(true);
    axios.get(categories_url, {signal})
      .then(({data}) => {
        setData(data.meals);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }).finally(() => {
        setLoading(false)});
    
    return () => controller.abort();
  }, []);


  return (
    <Grid container spacing={0} margin={0} padding={0} sx={{ minHeight: "100vh" }}>
      <Grid size={12}>
       <Header />
      </Grid>
      <Grid size={1.5}>
        <SideNav />
      </Grid>
      <Grid size={"grow"} bgcolor={"#bfdcff"} sx={{ minHeight: "100vh" }}>
        <MainContent />
      </Grid>
    </Grid>
  );
}

export default App;
