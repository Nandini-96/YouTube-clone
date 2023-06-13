import React from 'react'
import {BrowserRouter, Router, Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
// import { useState } from 'react';
//import Navbar from './components/Navbar';
import { Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed} from './components';



const App = () => (
<BrowserRouter>
<Box sx={{background: '#000'}}>
 <Navbar/>
<Routes>
    <Route path="/" exact element={<Feed/>}/> 
    <Route path="/video/:id" element={<VideoDetail/>}/>
    <Route path="/channel/:id" element={<ChannelDetail/>}/>
    <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
    
</Routes>
</Box>
</BrowserRouter>

);
 

export default App;
