import "./App.css";
import Navbar from "./components/Navbar";
import { Provider, useDispatch } from "react-redux";
// import store from "./components/redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Breadcrumbs from "./shares/Breadcrumbs";
import {theme} from './shares/customTheme'
import { ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { listUsers } from "./components/redux/users/usersAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(listUsers())
  },[])
  return (
    <>
      
        <ThemeProvider theme = {theme}>
          <Navbar />
          <Breadcrumbs/>
          <ToastContainer />
        </ThemeProvider>
      {/* </Provider> */}
    </>
  );
}

export default App;

