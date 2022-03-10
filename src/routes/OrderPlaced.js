import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function OrderPlaced(){
    let navigate = useNavigate();
    return(
        <div className="row row-padding text-center">
        <h3>Yay! Your Order has been placed</h3>
         <div className="row-padding">
              <button type="button" className=" btn-success butns " onClick={()=>navigate("/home", { replace: true })} >GO TO HOMEPAGE</button>
          </div>
       </div>
    )
}