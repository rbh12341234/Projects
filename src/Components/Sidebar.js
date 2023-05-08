import React from 'react';
import './Sidebar.css';
import { Gallery } from "react-grid-gallery";
import { images } from "./Img";



const Sidebar=()=>{
   

    return (<>
        <div class="sidenav">
            <ul>
                                         <a href="/class1">RESULT</a>
                                      

            </ul>
</div>


    <div className="main">
   
    <div>
      <Gallery images={images} enableImageSelection={false} />
    </div>
 
    </div>
    </>)
}

export default Sidebar;