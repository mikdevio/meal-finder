import { Grid } from "@mui/material";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";
import { Category, CategoriesResponse } from "./types";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const categories_url = import.meta.env.VITE_THEMEALDB_CATEGORIES_URL;

  const [data, setData] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    const { signal } = controller;
    setLoading(true);
    axios.get<CategoriesResponse>(categories_url, { signal })
      .then(({ data }) => {
        if (!ignore) {
          setData(data.meals);
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }).finally(() => {
        if (!ignore) {
          setLoading(false);
        }
      });

    return () => {
      ignore = true;
      controller.abort();
    };
  }, []);

  console.log(data);
  console.log(loading);

  return (
    <Grid container spacing={0} margin={0} padding={0} sx={{ minHeight: "100vh" }}>
      <Grid size={12}>
        <Header />
      </Grid>
      <Grid size={2}>
        <SideNav categories={data} loading={loading} />
      </Grid>
      <Grid size={"grow"} bgcolor={"#bfdcff"} sx={{ minHeight: "100vh" }}>
        <MainContent />
      </Grid>
    </Grid>
  );
}

export default App;
