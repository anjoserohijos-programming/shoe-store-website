import "./App.css";
import NavBar from "./components/navbar/navbar.tsx";
import { Box, Typography, Button } from "@mui/material";
import frontpagedesign from "./assets/front-page-design.png";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  return <div className="app">
    <NavBar></NavBar>
    <Box sx={{
      width: "100vw",
      height: "100vh",
      bgcolor: 'white',
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap-reverse",
    }}>
      <Box sx={{ flex: "1", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ display: "flex", flexDirection: "column", width: 500, height: 400, }}>
          <Box sx={{ width: "100%", flex: "1" }}>
            <Typography variant="h2" sx={{fontWeight:"bolder"}}>
              Step Up.
            </Typography>
          </Box>
          <Box sx={{ width: "100%", flex: "3" }}>
            <Typography variant="h4">
              Find your next pair at 
            </Typography>
            <Typography variant="h4" sx={{fontWeight:"bolder"}}>ianshoes.</Typography>
          </Box>
          <Button variant="outlined" size="large" onClick={()=>{
            navigate("/login")
          }}>Get Started</Button>
        </Box>
      </Box>
      <Box sx={{ flex: "1", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box
          component="img"
          sx={{
            height: 720,
            width: 720,
            maxHeight: { xs: 250, md: 400, lg: 600, xl: 720 },
            maxWidth: { xs: 250, md: 400, lg: 600, xl: 720 },
          }}
          alt="The house from the offer."
          src={frontpagedesign}
        />
      </Box>
    </Box>
  </div>;
}

export default App;
