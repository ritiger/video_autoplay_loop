import React from 'react';
import ThrobacLogoFIN from "../assets/ThrobacLogoFIN.mp4";

export default function Home() {
   return (
     <div>
       <video muted autoPlay playsInline loop preload="auto" width="100%">
         <source
           type="video/mp4"    
           src={ThrobacLogoFIN}
         />
       </video>
     </div>
   );
 }