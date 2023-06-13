import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({video :{id:{
  videoId},snippet} }) => {
    console.log(snippet);
    return(
      <Card sx={{width: {xs:'100%',sm:'358px',md:'320px'}, borderRadius:0,boxShadow:'none'}}>
        <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
         <CardMedia 
          image={snippet?.thumbnails?.high?.url} 
          alt={snippet?.title}
          sx={{ width: {xs:'100%',sm:'358px',md:'320px'}, height: 180 }} 
         /> {/*image coming from rapid Api */}
        </Link>
        <CardContent sx={{background: '#1e1e1e',height: '100px'}}>
          <Link  to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="white">
              {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
            </Typography>
          </Link>
          <Link  to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="gray">
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircleIcon sx={{fontsize:10 ,color:'gray',ml:'3px',height:'15px'}}/>
            </Typography>
          </Link>
          </CardContent>
      </Card>
    )
}
   
  
export default VideoCard
