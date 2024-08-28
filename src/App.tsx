import { Grid } from "@mui/material";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";

function App() {
  return (
    <Grid container spacing={2} border={1}>
      <Grid xs={12} bgcolor={"#aed6f1"}>
        <Header />
      </Grid>
      <Grid xs={2}>
        <SideNav />
      </Grid>
      <Grid xs={10} bgcolor={"#caeaff"} minHeight={"100vh"}>
        <MainContent />
      </Grid>
    </Grid>
  );
}

export default App;
