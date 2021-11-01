import React, { Component } from 'react';
//import VideoLooper from "react-video-looper";
import ThrobacLogoFIN from "../components/ThrobacLogoFIN.mp4";

export default function Home() {
   return (
     <div>
       <video muted autoPlay playsInline loop preload="auto" width="100%">
         <source type="video/mp4" src={ThrobacLogoFIN} />
       </video>
     </div>
   );
 }