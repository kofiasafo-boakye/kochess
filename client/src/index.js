import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { Container, Box } from "@mui/material";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="App">
    <Container maxWidth="xl">
        <Box sx={{ alignItems: 'center', justifyContent: "center", display: "flex",fontFamily: "Rubik", fontSize: 36, marginTop: "50px", color: "#007CBE" } }>kochess</Box>
        <App />
    </Container>
    

  </div>
    
  
);

