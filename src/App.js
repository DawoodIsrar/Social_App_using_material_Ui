import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feeds";
import RightBar from "./components/RightBar";
import { Box, Container, Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
// import Mui from "./components/Mui";

function App() {
  return (
    <>
      <Box>
        <Navbar></Navbar>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignContent={"start"}
          spacing={5}
        >
          <Sidebar />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </>
  );
}

export default App;
